const express = require("express");
const router = express.Router();
const repoController = require("../controllers/repoController");

router.get("/repos", repoController.getRepos);

module.exports = router;
