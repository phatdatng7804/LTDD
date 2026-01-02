const services = require("../services");
const {
  badRequest,
  internalServerError,
} = require("../middlewares/handle_error");
const {
  createCharityFundSchema,
  updateCharityFundSchema,
  deleteCharityFundSchema,
} = require("../helper/joi_charity");

const getCharityFunds = async (req, res) => {
  try {
    const response = await services.charity.getCharityFunds();
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

const createCharityFund = async (req, res) => {
  try {
    const { error } = createCharityFundSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.charity.createCharityFund(req.body);
    if (response.err) return badRequest(response.mes, res);
    return res.status(201).json({
      err: 0,
      mes: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const updateCharityFund = async (req, res) => {
  try {
    const { name } = req.params;
    const { error } = updateCharityFundSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.charity.updateCharityFund(name, req.body);
    if (response.err) return badRequest(response.mes, res);
    return res.status(200).json({
      err: 0,
      mes: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

const deleteCharityFund = async (req, res) => {
  try {
    const { name } = req.params;
    const { error } = deleteCharityFundSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.charity.deleteCharityFund(name);
    if (response.err) return badRequest(response.mes, res);
    return res.status(200).json({
      err: 0,
      mes: response.mes,
      data: response.data,
    });
  } catch (error) {
    return internalServerError(error, res);
  }
};

module.exports = {
  getCharityFunds,
  createCharityFund,
  updateCharityFund,
  deleteCharityFund,
};
