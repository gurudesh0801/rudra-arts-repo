const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { createBlog, getAllBlogs, updateBlog, deleteBlog } = require("../controllers/blogController");

router.post("/", upload.single("image"), createBlog);
router.get("/", getAllBlogs);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
