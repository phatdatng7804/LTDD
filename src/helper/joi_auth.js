const Joi = require("joi");

// Schema validation cho đăng ký
const registerSchema = Joi.object({
  username: Joi.string()
    .min(8)
    .pattern(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
      "string.min": "Username phải có ít nhất 8 ký tự",
      "string.pattern.base": "Username không được chứa dấu hoặc ký tự đặc biệt",
      "any.required": "Username là bắt buộc",
    }),
  full_name: Joi.string().required().messages({
    "any.required": "Họ và tên là bắt buộc",
  }),

  email: Joi.string()
    .email()
    .pattern(/@gmail\.com$/)
    .required()
    .messages({
      "string.email": "Email không hợp lệ",
      "string.pattern.base": "Email phải là định dạng @gmail.com",
      "any.required": "Email là bắt buộc",
    }),

  password: Joi.string()
    .min(9)
    .pattern(/^(?=.*[a-zA-Z])(?=.*\d)/)
    .required()
    .messages({
      "string.min": "Mật khẩu phải có ít nhất 9 ký tự",
      "string.pattern.base": "Mật khẩu phải chứa cả chữ và số",
      "any.required": "Mật khẩu là bắt buộc",
    }),

  role_id: Joi.number().integer().optional(),
});

// Schema validation cho đăng nhập
const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    "any.required": "Username là bắt buộc",
  }),

  password: Joi.string().required().messages({
    "any.required": "Mật khẩu là bắt buộc",
  }),
});
module.exports = {
  registerSchema,
  loginSchema,
};
