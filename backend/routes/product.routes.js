import express from "express";

import {
  createProducts,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

// API for getting all products
router.get("/", getProducts);

// API for creating product
router.post("/", createProducts);

// API for updating product
router.put("/:id", updateProduct);

// API for deleting product
router.delete("/:id", deleteProduct);

export default router;
