const db = require("../models");

const category = db.Categories;

const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // Tìm tất cả danh mục
      const categories = await category.findAll({
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: categories ? 0 : 1,
        mes: categories ? "Lấy danh mục thành công" : "Lấy danh mục thất bại",
        data: categories,
      });
    } catch (error) {
      reject(new Error(error.message || "Lấy danh mục thất bại"));
    }
  });
};
const createCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // Kiểm tra xem tên danh mục đã tồn tại chưa
      const existingCategory = await category.findOne({ where: { name } });
      if (existingCategory) {
        return reject({
          err: 1,
          mes: "Tên danh mục đã tồn tại",
        });
      }

      // Tạo danh mục mới
      const newCategory = await category.create({ name });

      resolve({
        err: newCategory ? 0 : 1,
        mes: newCategory ? "Tạo danh mục thành công" : "Tạo danh mục thất bại",
        data: newCategory,
      });
    } catch (error) {
      reject(new Error(error.message || "Tạo danh mục thất bại"));
    }
  });
};

const updateCategory = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name } = data;

      // Kiểm tra xem danh mục có tồn tại không
      const foundCategory = await category.findOne({ where: { id } });
      if (!foundCategory) {
        return resolve({
          err: 1,
          mes: "Danh mục không tồn tại",
          data: null,
        });
      }

      // Kiểm tra xem tên mới có trùng với danh mục khác không (trừ chính nó)
      const { Op } = db.Sequelize;
      const existingCategory = await category.findOne({
        where: {
          name: name,
          id: { [Op.ne]: id },
        },
      });
      if (existingCategory) {
        return resolve({
          err: 1,
          mes: "Tên danh mục đã tồn tại",
          data: null,
        });
      }

      // Cập nhật danh mục
      await foundCategory.update({ name });
      await foundCategory.reload(); // Reload để lấy dữ liệu mới nhất

      resolve({
        err: 0,
        mes: "Cập nhật danh mục thành công",
        data: foundCategory,
      });
    } catch (error) {
      reject(new Error(error.message || "Cập nhật danh mục thất bại"));
    }
  });
};

const deleteCategory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name } = data;
      const foundCategory = await category.findOne({ where: { name } });
      if (!foundCategory) {
        return resolve({
          err: 1,
          mes: "Danh mục không tồn tại",
          data: null,
        });
      }
      await foundCategory.destroy();
      resolve({
        err: 0,
        mes: "Xóa danh mục thành công",
        data: foundCategory,
      });
    } catch (error) {
      reject(new Error(error.message || "Xóa danh mục thất bại"));
    }
  });
};
module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
