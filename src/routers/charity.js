const charity = require("../controllers/controller.charity");
const router = require("express").Router();
const { verifyToken } = require("../middlewares/handle_auth");
const { authorization } = require("../middlewares/handle_admin");

router.get(
  "/get",
  verifyToken,
  authorization([1], [2]),
  charity.getCharityFunds
);
router.post(
  "/created",
  verifyToken,
  authorization([1]),
  charity.createCharityFund
);
router.put(
  "/update/:name",
  verifyToken,
  authorization([1]),
  charity.updateCharityFund
);
router.delete(
  "/delete/:name",
  verifyToken,
  authorization([1]),
  charity.deleteCharityFund
);

module.exports = router;
