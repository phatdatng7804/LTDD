const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRouter = require("./src/routers");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
require("./database");
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
initRouter(app);

const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, () => {
  console.log(`Server is running on port ${listener.address().port}`);
  console.log(`Swagger: http://localhost:${listener.address().port}/api-docs`);
});
module.exports = app;
