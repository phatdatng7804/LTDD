const db = require("../models");

const isAdmin = async (req, res, next) => {
  if (Number(req.user.role_id) !== 1) {
    return res.status(403).json({
      message: "Bạn không có quyền dùng tính năng này",
    });
  }
  next();
};

module.exports = {
  isAdmin,
};
