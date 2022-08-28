const express = require("express");

const {
  getOferts,
  getOfert,
  createOfert,
  updateOfert,
  deleteOfert
} = require("../controllers/oferts");

const router = express.Router();

router.post("/", createOfert);

router.get("/", getOferts);

router.get("/:id", getOfert);

router.put("/:id", updateOfert);

router.delete("/:id", deleteOfert);

module.exports = router;
