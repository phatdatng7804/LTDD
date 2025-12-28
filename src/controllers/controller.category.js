const services = require("../services");
const {
  badRequest,
  internalServerError,
} = require("../middlewares/handle_error");
const { categorySchema } = require("../helper/joi_categories");

const getCategories = async (req, res) => {
  try {
    const response = await services.category.getCategories();
    if (response.err) return badRequest(response.mes, res);
    return res.status(200).json({
      err: 0,
      message: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const createCategories = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) return badRequest(error.message, res);

    const response = await services.category.createCategory(req.body);
    if (response.err) return badRequest(response.mes, res);
    return res.status(201).json({
      err: 0,
      message: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const updateCategories = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = categorySchema.validate(req.body);
    if (error) return badRequest(error.message, res);

    const response = await services.category.updateCategory(id, req.body);
    if (response.err) return badRequest(response.mes, res);
    return res.status(200).json({
      err: 0,
      message: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const deleteCategories = async (req, res) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) return badRequest(error.message, res);

    const response = await services.category.deleteCategory(req.body);
    if (response.err) return badRequest(response.mes, res);
    return res.status(200).json({
      err: 0,
      message: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

module.exports = {
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
};
