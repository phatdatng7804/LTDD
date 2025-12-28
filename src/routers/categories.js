const category = require("../controllers/controller.category");
const { verifyToken } = require("../middlewares/handle_auth");
const router = require("express").Router();

router.get("/get", verifyToken, category.getCategories);
router.post("/created", verifyToken, category.createCategories);
router.put("/update/:id", verifyToken, category.updateCategories);
router.delete("/delete/:id", verifyToken, category.deleteCategories);

module.exports = router;
