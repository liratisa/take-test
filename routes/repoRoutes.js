const express = require("express");
const router = express.Router();
const repoController = require("../controllers/repoController");

router.get("/", repoController.publicRoute);
router.get("/repos", repoController.getRepos);

module.exports = router;
