const user = require("./user");
const auth = require("./auth");
const category = require("./categories");
const initRouter = (app) => {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/category", category);
};

module.exports = initRouter;
