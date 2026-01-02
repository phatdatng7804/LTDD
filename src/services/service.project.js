const db = require("../models");

const project = db.Projects;

const getProjects = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const projects = await project.findAll({
        order: [["createdAt", "DESC"]],
      });
      if (projects.length === 0) {
        return resolve({
          err: 1,
          mes: "Không có dự án nào tồn tại",
          data: [],
        });
      }
      return resolve({
        err: 0,
        mes: "Lấy dự án thành công",
        data: projects,
      });
    } catch (error) {
      reject(new Error(error.message || "Lấy dự án thất bại"));
    }
  });
};

const createProject = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        category_id,
        fund_id,
        title,
        short_description,
        description,
        goal_amount,
        status,
      } = data;
      const project = await project.findOne({ where: { title } });
      if (project)
        return reject({
          err: 1,
          mes: "Dự án đã tồn tại",
          data: null,
        });
      const newProject = await project.create({
        category_id,
        fund_id,
        title,
        short_description,
        description,
        goal_amount,
        status: status || "pending",
      });
      resolve({
        err: newProject ? 0 : 1,
        mes: newProject ? "Tạo dự án thành công" : "Tạo dự án thất bại",
        data: newProject,
      });
    } catch (error) {
      reject(new Error(error.message || "Tạo dự án thất bại"));
    }
  });
};

const updateProject = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        category_id,
        fund_id,
        title,
        short_description,
        description,
        goal_amount,
        status,
      } = data;
      const project = await project.findOne({ where: { id } });
      if (!project)
        return reject({
          err: 1,
          mes: "Dự án không tồn tại",
          data: null,
        });
      const updatedProject = await project.update({
        category_id,
        fund_id,
        title,
        short_description,
        description,
        goal_amount,
        status,
      });
      resolve({
        err: updatedProject ? 0 : 1,
        mes: updatedProject
          ? "Cập nhật dự án thành công"
          : "Cập nhật dự án thất bại",
        data: updatedProject,
      });
    } catch (error) {
      reject(new Error(error.message || "Cập nhật dự án thất bại"));
    }
  });
};

const deleteProject = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const project = await project.findOne({ where: { id } });
      if (!project)
        return reject({
          err: 1,
          mes: "Dự án không tồn tại",
          data: null,
        });
      await project.destroy();
      resolve({
        err: 0,
        mes: "Xóa dự án thành công",
        data: project,
      });
    } catch (error) {
      reject(new Error(error.message || "Xóa dự án thất bại"));
    }
  });
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
