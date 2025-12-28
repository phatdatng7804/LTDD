const jwt = require("jsonwebtoken");
const db = require("../models");

const User = db.User;

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token)
      return res.status(401).json({ err: 1, message: "Unauthorized" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.id);

    if (!user) return res.status(401).json({ err: 1, message: "Unauthorized" });
    req.user = {
      id: user.id,
      username: user.username,
      role_id: user.role_id,
    };
    next();
  } catch (error) {
    return res.status(403).json({ err: 1, message: "Invalid token" });
  }
};

module.exports = {
  verifyToken,
};
