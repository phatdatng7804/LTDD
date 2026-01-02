const db = require("../models");

const authorization = (allowedRoles) => {
  return async (req, res, next) => {
    const { user } = req;
    if (!allowedRoles.includes(user.role_id)) {
      return res
        .status(403)
        .json({ message: "Bạn không có quyền dùng tính năng này" });
    }
    next();
  };
};
module.exports = {
  authorization,
};
