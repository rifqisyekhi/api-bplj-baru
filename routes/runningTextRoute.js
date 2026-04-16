const express = require("express");
const runningTextController = require("../controllers/runningTextController");
const authenticateToken = require("../middleware/authenticate");
const router = express.Router();

router.put("/:id", authenticateToken, runningTextController.updateRunningText);
router.get("/", runningTextController.getAllRunningText);

module.exports = router;
