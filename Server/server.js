const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Route imports
const galleryRoutes = require("./routes/gallery");
const aboutRoutes = require("./routes/about");
const servicesRoutes = require("./routes/services");
const contactRoutes = require("./routes/contact");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/products");

// Route usage
app.use("/api/gallery", galleryRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Rudra Arts API running with MongoDB");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
