const express = require("express");
const cors = require("cors");
require("dotenv").config();
const initRouter = require("./src/routers");
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

initRouter(app);

const PORT = process.env.PORT || 5000;
const listener = app.listen(PORT, () => {
  console.log(`Server is running on port ${listener.address().port}`);
});
module.exports = app;
