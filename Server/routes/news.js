const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { createNews, getNews, updateNews, deleteNews } = require("../controllers/newsController");

router.post("/", upload.single("image"), createNews);
router.get("/", getNews);
router.put("/:id", upload.single("image"), updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
