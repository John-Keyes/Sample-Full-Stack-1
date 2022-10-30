const router = require("express").Router();
const {checkToken, getAll, create, login, update, remove} = require("../controllers/auth.js");
router.get("/all", getAll);
router.post("/register", checkToken, create);
router.post("/login", login);
router.patch("/patch", checkToken, update);
router.delete("/delete", checkToken, remove);
module.exports = router;