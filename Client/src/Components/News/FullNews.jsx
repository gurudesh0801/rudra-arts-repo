import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";

const newsData = [
  {
    title: "Rudra Arts Unveils New Statue Collection",
    description:
      "Experience the depth of Indian mythology with our latest hand-sculpted masterpieces crafted by traditional artisans.",
    image: img1,
    link: "/news/statue-collection",
  },
  {
    title: "Featured in National Handicraft Exhibition 2025",
    description:
      "We proudly showcased our handcrafted decor at India’s largest cultural heritage exhibition, receiving national acclaim.",
    image: img2,
    link: "/news/exhibition-2025",
  },
  {
    title: "Behind the Scenes: Crafting Spiritual Murals",
    description:
      "Take a glimpse into our mural-making process that blends spiritual symbolism with artistic realism.",
    image: img3,
    link: "/news/spiritual-murals",
  },
  {
    title: "Rudra Arts Unveils New Statue Collection",
    description:
      "Experience the depth of Indian mythology with our latest hand-sculpted masterpieces crafted by traditional artisans.",
    image: img1,
    link: "/news/statue-collection",
  },
  {
    title: "Featured in National Handicraft Exhibition 2025",
    description:
      "We proudly showcased our handcrafted decor at India’s largest cultural heritage exhibition, receiving national acclaim.",
    image: img2,
    link: "/news/exhibition-2025",
  },
  {
    title: "Behind the Scenes: Crafting Spiritual Murals",
    description:
      "Take a glimpse into our mural-making process that blends spiritual symbolism with artistic realism.",
    image: img3,
    link: "/news/spiritual-murals",
  },
];

const FullNews = () => {
  return (
    <section className="w-full mt-10 bg-[#fdfaf6] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3b2f2f] mb-4 font-viaoda">
          Latest from Rudra Arts
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Stay updated with our artistic journey, media features, exhibitions,
          and creative insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* Full-size image */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#3b2f2f] mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-700 text-sm">{news.description}</p>
              </div>
              <a
                href={news.link}
                className="mt-4 inline-block bg-[#e3b07e] hover:bg-[#d89b60] text-black text-sm font-semibold px-4 py-2 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullNews;
