const project = require("../controllers/controller.project");
const { verifyToken } = require("../middlewares/handle_auth");
const router = require("express").Router();
const { authorization } = require("../middlewares/handle_admin");

router.get("/get", verifyToken, authorization([1], [2]), project.getProjects);
router.post("/created", verifyToken, authorization([1]), project.createProject);
router.put(
  "/update/:id",
  verifyToken,
  authorization([1]),
  project.updateProject
);
router.delete(
  "/delete/:id",
  verifyToken,
  authorization([1]),
  project.deleteProject
);

module.exports = router;
