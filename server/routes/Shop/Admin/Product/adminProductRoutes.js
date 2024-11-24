const express = require("express");
const router = express.Router();
const AddProduct = require("../../../../controllers/Shop/Admin/AddProduct");
const DeleteProduct = require("../../../../controllers/Shop/Admin/DeleteProduct");
const UpdateProducts = require("../../../../controllers/Shop/Admin/UpdateProducts");

const upload = require("../../../../Utils/uploadRoutes");

// Route to add a new product with image upload
router.post("/upload", upload.single("file"), AddProduct);

// Route to update a specific product by ID with optional image upload
router.put("/upload/:id", upload.single("file"), UpdateProducts);

router.delete("/:id", DeleteProduct);

module.exports = router;
