const services = require("../services");
const { registerSchema, loginSchema } = require("../helper/joi_auth");
const {
  badRequest,
  internalServerError,
} = require("../middlewares/handle_error");
const register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.auth.register(req.body);
    if (response.err) return badRequest(response.message, res);
    return res.status(201).json({
      err: 0,
      message: "Đăng ký thành công",
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.auth.login(req.body);
    if (response.err) return badRequest(response.message, res);
    return res.status(200).json({
      err: 0,
      message: response.message,
      access_token: response.access_token,
      user: response.user,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

module.exports = {
  register,
  login,
};
