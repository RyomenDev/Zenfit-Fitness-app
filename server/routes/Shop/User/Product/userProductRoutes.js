const express = require("express");
const router = express.Router();

const GetAllProducts = require("../../../../controllers/Shop/Common/GetAllProducts");
const GetProduct = require("../../../../controllers/Shop/Common/GetProduct");

// Route to get all products
router.get("/", GetAllProducts);

// Route to get a specific product by ID
router.get("/:id", GetProduct);

module.exports = router;
