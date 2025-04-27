const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require("../controllers/productsController");
const Product = require("../models/Products");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create
router.post("/add", upload.single("pimage"), productController.createProduct);

// Read
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Read single
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  console.log("Hello from update route");
  console.log(req.body);
  const { pname, pid, pprice, pimage, pdescription, psize, pcategory } =
    req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        product_name: pname,
        product_id: pid,
        product_price: pprice,
        product_image: pimage,
        product_description: pdescription,
        product_size: psize,
        product_category: pcategory,
      },
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product updated successfully", updatedProduct });
  } catch (err) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// WhatsApp share
router.get("/:id/whatsapp-message", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Product not found" });

    const message = `Hi! I'm interested in the following product:

 ID: ${p.product_id}
 Name: ${p.product_name}
 Description: ${p.product_description}
 Size: ${p.product_size}
 Price: ₹${p.product_price}
 Category: ${p.product_category}
 Image: ${p.product_image}`;

    const whatsappURL = `https://wa.me/918668494090?text=${encodeURIComponent(
      message
    )}`;

    res.json({ message, whatsappURL });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
