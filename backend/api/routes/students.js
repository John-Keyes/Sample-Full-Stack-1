const router = require("express").Router();
const {checkToken, getAll, create, login, update, remove} = require("../controllers/auth.js");
router.get("/all", getAll);
router.post("/register", create);
router.post("/login/:studentID", login);
router.patch("/update/:studentID", checkToken, update);
router.delete("/delete/:studentID", checkToken, remove);
module.exports = router;