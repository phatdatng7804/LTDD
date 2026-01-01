const category = require("../controllers/controller.category");
const { verifyToken } = require("../middlewares/handle_auth");
const router = require("express").Router();
const { isAdmin } = require("../middlewares/handle_admin");
router.get("/get", verifyToken, isAdmin, category.getCategories);
router.post("/created", verifyToken, isAdmin, category.createCategories);
router.put("/update/:id", verifyToken, isAdmin, category.updateCategories);
router.delete("/delete/:id", verifyToken, isAdmin, category.deleteCategories);

module.exports = router;
