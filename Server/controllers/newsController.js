const News = require('../models/News');

exports.createNews = async (req, res) => {
  try {
    const { headline, details } = req.body;
    const image = req.file ? req.file.filename : null;

    const news = new News({ headline, details, image });
    await news.save();

    res.status(201).json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create news" });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { headline, details } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updatedData = { headline, details };
    if (image) updatedData.image = image;

    const updatedNews = await News.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedNews) return res.status(404).json({ error: "News not found" });

    res.json(updatedNews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update news" });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNews = await News.findByIdAndDelete(id);
    if (!deletedNews) return res.status(404).json({ error: "News not found" });

    res.json({ message: "News deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete news" });
  }
};
