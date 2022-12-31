const router = require("express").Router();
const {checkToken, getAll, create, login, update, remove} = require("../controllers/auth.js");
router.get("/all", getAll);
router.post("/Register", create);
router.post("/Login/:studentID", login);
router.patch("/UpdateProfile/:studentID", checkToken, update);
router.delete("/Delete/:studentID", checkToken, remove);
module.exports = router;