const express = require("express");

const {
  getDishes,
  getDish,
  createDish,
  updateDish,
  deleteDish
} = require("../controllers/dishes");

const router = express.Router();

router.post("/", createDish);

router.get("/", getDishes);

router.get("/:id", getDish);

router.put("/:id", updateDish);

router.delete("/:id", deleteDish);

module.exports = router;
