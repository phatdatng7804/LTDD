const db = require("../models");

const charity = db.CharityFunds;

const getCharityFunds = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const charityFunds = await charity.findAll({
        order: [["createdAt", "DESC"]],
      });
      if (charityFunds.length === 0) {
        return resolve({
          err: 1,
          mes: "Không có tổ chức từ thiện nào tồn tại",
          data: [],
        });
      }
      return resolve({
        err: 0,
        mes: "Lấy tổ chức từ thiện thành công",
        data: charityFunds,
      });
    } catch (error) {
      reject(new Error(error.message || "Lấy tổ chức từ thiện thất bại"));
    }
  });
};

const createCharityFund = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        name,
        description,
        phone_number,
        email,
        bank_name,
        total_amount,
      } = data;
      const charityFund = await charity.findOne({ where: { name } });
      if (charityFund) {
        return reject({
          err: 1,
          mes: "Tổ chức từ thiện đã tồn tại!",
        });
      }
      const newCharityFund = await charity.create({
        name,
        description,
        phone_number,
        email,
        bank_name,
        total_amount,
      });
      resolve({
        err: newCharityFund ? 0 : 1,
        mes: newCharityFund
          ? "Tạo tổ chức từ thiện thành công"
          : "Tạo tổ chức từ thiện thất bại",
        data: newCharityFund,
      });
    } catch (error) {
      reject(new Error(error.message || "Tạo tổ chức từ thiện thất bại"));
    }
  });
};

const updateCharityFund = (name, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        name: newName,
        description,
        phone_number,
        email,
        bank_name,
        total_amount,
      } = data;

      // Kiểm tra xem tổ chức từ thiện có tồn tại không
      const charityFund = await charity.findOne({ where: { name } });
      if (!charityFund) {
        return resolve({
          err: 1,
          mes: "Tổ chức từ thiện không tồn tại",
          data: null,
        });
      }

      // Nếu có tên mới, kiểm tra xem tên mới có trùng với tổ chức khác không (trừ chính nó)
      if (newName && newName !== name) {
        const { Op } = db.Sequelize;
        const existingCharityFund = await charity.findOne({
          where: {
            name: newName,
            id: { [Op.ne]: charityFund.id },
          },
        });
        if (existingCharityFund) {
          return resolve({
            err: 1,
            mes: "Tên tổ chức từ thiện đã tồn tại",
            data: null,
          });
        }
      }

      // Chuẩn bị dữ liệu cập nhật (chỉ cập nhật các trường được cung cấp)
      const updateData = {};
      if (newName) updateData.name = newName;
      if (description !== undefined) updateData.description = description;
      if (phone_number !== undefined) updateData.phone_number = phone_number;
      if (email !== undefined) updateData.email = email;
      if (bank_name !== undefined) updateData.bank_name = bank_name;
      if (total_amount !== undefined) updateData.total_amount = total_amount;

      await charityFund.update(updateData);
      await charityFund.reload();

      resolve({
        err: 0,
        mes: "Cập nhật tổ chức từ thiện thành công",
        data: charityFund,
      });
    } catch (error) {
      reject(new Error(error.message || "Cập nhật tổ chức từ thiện thất bại"));
    }
  });
};

const deleteCharityFund = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const charityFund = await charity.findOne({ where: { name } });
      if (!charityFund) {
        return resolve({
          err: 1,
          mes: "Tổ chức từ thiện không tồn tại",
          data: null,
        });
      }
      await charityFund.destroy();
      resolve({
        err: 0,
        mes: "Xóa tổ chức từ thiện thành công",
        data: charityFund,
      });
    } catch (error) {
      reject(new Error(error.message || "Xóa tổ chức từ thiện thất bại"));
    }
  });
};

module.exports = {
  getCharityFunds,
  createCharityFund,
  updateCharityFund,
  deleteCharityFund,
};
