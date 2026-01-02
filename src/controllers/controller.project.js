const {
  badRequest,
  internalServerError,
} = require("../middlewares/handle_error");
const services = require("../services");
const {
  createProjectSchema,
  updateProjectSchema,
} = require("../helper/joi_project");

const getProjects = async (req, res) => {
  try {
    const response = await services.project.getProjects();
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

const createProject = async (req, res) => {
  try {
    const { error } = createProjectSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.project.createProject(req.body);
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

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = updateProjectSchema.validate(req.body);
    if (error) return badRequest(error.message, res);
    const response = await services.project.updateProject(id, req.body);
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

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.project.deleteProject(id);
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
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
