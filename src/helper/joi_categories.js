const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên danh mục là bắt buộc",
    "string.empty": "Tên danh mục không được để trống",
  }),
});

module.exports = {
  categorySchema,
};
