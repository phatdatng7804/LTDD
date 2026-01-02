const Joi = require("joi");

// Schema validation cho tạo tổ chức từ thiện
const createCharityFundSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên tổ chức từ thiện là bắt buộc",
    "string.empty": "Tên tổ chức từ thiện không được để trống",
  }),
  description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả phải là chuỗi ký tự",
  }),
  phone_number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .optional()
    .allow("")
    .messages({
      "string.pattern.base": "Số điện thoại phải có 10-11 chữ số",
    }),
  email: Joi.string().email().optional().allow("").messages({
    "string.email": "Email không hợp lệ",
  }),
  bank_name: Joi.string().optional().allow("").messages({
    "string.base": "Tên ngân hàng phải là chuỗi ký tự",
  }),
  total_amount: Joi.number().min(0).optional().messages({
    "number.base": "Tổng số tiền phải là số",
    "number.min": "Tổng số tiền phải lớn hơn hoặc bằng 0",
  }),
});

// Schema validation cho cập nhật tổ chức từ thiện (tất cả các trường đều optional)
const updateCharityFundSchema = Joi.object({
  name: Joi.string().optional().messages({
    "string.empty": "Tên tổ chức từ thiện không được để trống",
  }),
  description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả phải là chuỗi ký tự",
  }),
  phone_number: Joi.string()
    .pattern(/^[0-9]{10,11}$/)
    .optional()
    .allow("")
    .messages({
      "string.pattern.base": "Số điện thoại phải có 10-11 chữ số",
    }),
  email: Joi.string().email().optional().allow("").messages({
    "string.email": "Email không hợp lệ",
  }),
  bank_name: Joi.string().optional().allow("").messages({
    "string.base": "Tên ngân hàng phải là chuỗi ký tự",
  }),
  total_amount: Joi.number().min(0).optional().messages({
    "number.base": "Tổng số tiền phải là số",
    "number.min": "Tổng số tiền phải lớn hơn hoặc bằng 0",
  }),
});

// Schema validation cho xóa tổ chức từ thiện (theo name)
const deleteCharityFundSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên tổ chức từ thiện là bắt buộc",
    "string.empty": "Tên tổ chức từ thiện không được để trống",
  }),
});

module.exports = {
  createCharityFundSchema,
  updateCharityFundSchema,
  deleteCharityFundSchema,
};
