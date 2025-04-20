const express = require("express");
const router = express.Router();
const Product = require("../models/Products"); // Mongoose model

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET product by MongoDB _id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST create new product
router.post("/add", async (req, res) => {
  const { pname, pid, pprice, pimage, pdescription, psize, pcategory } =
    req.body;

  try {
    const newProduct = new Product({
      product_name: pname,
      product_id: pid,
      product_price: pprice,
      product_image: pimage,
      product_description: pdescription,
      product_size: psize,
      product_category: pcategory,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// PUT update product by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { pname, pid, pprice, pimage, pdescription, psize, pcategory } =
    req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
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

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE product by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// GET WhatsApp message by product id
router.get("/:id/whatsapp-message", async (req, res) => {
  const { id } = req.params;

  try {
    const p = await Product.findById(id);
    if (!p) return res.status(404).json({ message: "Product not found" });

    const message = `Hi! I'm interested in the following product:
  
🆔 ID: ${p.product_id}
📦 Name: ${p.product_name}
📃 Description: ${p.product_description}
📏 Size: ${p.product_size || "N/A"}
💰 Price: ₹${p.product_price}
🏷️ Category: ${p.product_category || "N/A"}
🖼️ Image: ${p.product_image}`;

    const whatsappURL = `https://wa.me/918668494090?text=${encodeURIComponent(
      message
    )}`;

    return res.json({ message, whatsappURL });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
