const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Swagger API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },

  apis: ["./src/swagger/*.js", "./src/index.js"],
};

module.exports = swaggerJsdoc(options);
