const user = require("./user");
const auth = require("./auth");
const initRouter = (app) => {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
};

module.exports = initRouter;
