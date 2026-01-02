const Joi = require("joi");

// Schema validation cho tạo dự án
const createProjectSchema = Joi.object({
  category_id: Joi.number().integer().positive().required().messages({
    "any.required": "ID danh mục là bắt buộc",
    "number.base": "ID danh mục phải là số",
    "number.integer": "ID danh mục phải là số nguyên",
    "number.positive": "ID danh mục phải là số dương",
  }),
  fund_id: Joi.number().integer().positive().required().messages({
    "any.required": "ID tổ chức từ thiện là bắt buộc",
    "number.base": "ID tổ chức từ thiện phải là số",
    "number.integer": "ID tổ chức từ thiện phải là số nguyên",
    "number.positive": "ID tổ chức từ thiện phải là số dương",
  }),
  title: Joi.string().required().messages({
    "any.required": "Tiêu đề dự án là bắt buộc",
    "string.empty": "Tiêu đề dự án không được để trống",
  }),
  short_description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả ngắn phải là chuỗi ký tự",
  }),
  description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả phải là chuỗi ký tự",
  }),
  goal_amount: Joi.number().min(0).required().messages({
    "any.required": "Số tiền mục tiêu là bắt buộc",
    "number.base": "Số tiền mục tiêu phải là số",
    "number.min": "Số tiền mục tiêu phải lớn hơn hoặc bằng 0",
  }),
});

// Schema validation cho cập nhật dự án (tất cả các trường đều optional)
const updateProjectSchema = Joi.object({
  category_id: Joi.number().integer().positive().optional().messages({
    "number.base": "ID danh mục phải là số",
    "number.integer": "ID danh mục phải là số nguyên",
    "number.positive": "ID danh mục phải là số dương",
  }),
  fund_id: Joi.number().integer().positive().optional().messages({
    "number.base": "ID tổ chức từ thiện phải là số",
    "number.integer": "ID tổ chức từ thiện phải là số nguyên",
    "number.positive": "ID tổ chức từ thiện phải là số dương",
  }),
  title: Joi.string().optional().messages({
    "string.empty": "Tiêu đề dự án không được để trống",
  }),
  short_description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả ngắn phải là chuỗi ký tự",
  }),
  description: Joi.string().optional().allow("").messages({
    "string.base": "Mô tả phải là chuỗi ký tự",
  }),
  goal_amount: Joi.number().min(0).optional().messages({
    "number.base": "Số tiền mục tiêu phải là số",
    "number.min": "Số tiền mục tiêu phải lớn hơn hoặc bằng 0",
  }),
  status: Joi.string()
    .valid("active", "completed", "cancelled", "pending")
    .optional()
    .messages({
      "any.only":
        "Trạng thái phải là một trong các giá trị: active, completed, cancelled, pending",
    }),
});

module.exports = {
  createProjectSchema,
  updateProjectSchema,
};
