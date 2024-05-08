const router = require("express").Router();
const userRoutes = require("./user.routes");
const eduTypesRoutes = require("./enducationTypes.routes");
router.use("/user", userRoutes);
router.use("/education-types", eduTypesRoutes);

module.exports = router;
