const user = require("./user");
const auth = require("./auth");
const category = require("./categories");
const charity = require("./charity");
const project = require("./project");
const initRouter = (app) => {
  app.use("/api/user", user);
  app.use("/api/auth", auth);
  app.use("/api/category", category);
  app.use("/api/charity", charity);
  app.use("/api/project", project);
};

module.exports = initRouter;
