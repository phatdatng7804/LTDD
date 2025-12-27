const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const user = db.User;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const register = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { username, full_name, email, password } = data;

      // Kiểm tra xem email đã tồn tại chưa
      const existingUserByEmail = await user.findOne({ where: { email } });
      if (existingUserByEmail) {
        return reject({
          err: 1,
          message: "Email đã được sử dụng",
        });
      }

      // Kiểm tra xem username đã tồn tại chưa
      const existingUserByUsername = await user.findOne({
        where: { username },
      });
      if (existingUserByUsername) {
        return reject({
          err: 1,
          message: "Username đã được sử dụng",
        });
      }

      // Hash password
      const hashedPassword = await hashPassword(password);

      // Tạo user mới (mặc định role_id = 2 nếu không được cung cấp)
      const newUser = await user.create({
        username,
        full_name,
        email,
        password: hashedPassword,
        role_id: data.role_id || 2,
      });

      // Loại bỏ password khỏi response
      const userResponse = {
        id: newUser.id,
        username: newUser.username,
        full_name: newUser.full_name,
        email: newUser.email,
        role_id: newUser.role_id,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };

      resolve({
        success: true,
        message: "Đăng ký thành công",
        data: userResponse,
      });
    } catch (error) {
      reject(new Error(error.message || "Đăng ký thất bại"));
    }
  });
};

const login = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { username, password } = data;
      const foundUser = await user.findOne({ where: { username } });
      if (!foundUser) {
        return reject({
          err: 1,
          message: "Tài khoản không tồn tại",
        });
      }
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if (!isMatch) {
        return reject({
          err: 1,
          message: "Mật khẩu không chính xác",
        });
      }
      const token = jwt.sign(
        {
          id: foundUser.id,
          username: foundUser.username,
          role_id: foundUser.role_id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
      );
      resolve({
        success: true,
        message: "Đăng nhập thành công",
        access_token: `Bearer ${token}`,
        user: {
          full_name: foundUser.full_name,
        },
      });
    } catch (error) {
      reject(new Error(error.message || "Đăng nhập thất bại"));
    }
  });
};
module.exports = {
  register,
  login,
};
