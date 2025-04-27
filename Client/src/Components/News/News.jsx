import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";
import aboutBg from "../../assets/images/about-bg.jpg";
import cardBg from "../../assets/images/card-bg2.png";
import { useState } from "react";

// News Data
const NewsData = [
  {
    id: 1,
    title: "With Vicky Kaushal",
    image: img1,
    shortDesc:
      "मागील कित्येक महिन्यांपासून ‘छावा’ या छत्रपती संभाजी महाराजांच्या आयुष्यावर आधारित....",
    fullDesc:
      "मागील कित्येक महिन्यांपासून ‘छावा’ या छत्रपती संभाजी महाराजांच्या आयुष्यावर आधारित चित्रपटासाठी ‘इतिहास सल्लागार’ म्हणून मी आणि चंद्रहास काम करत आहोत...",
  },
  {
    id: 2,
    title: "Rajputana & Maratha Warrior Sculptures",
    image: img2,
    shortDesc:
      "How warrior sculptures represent the bravery of Rajput and Maratha traditions.",
    fullDesc:
      "From Maharana Pratap to Chhatrapati Shivaji Maharaj, warrior sculptures capture their valor. The fine detailing in each handcrafted piece showcases centuries of craftsmanship...",
  },
  {
    id: 3,
    title: "Wooden vs. Metal Handicrafts: Which is Better?",
    image: img3,
    shortDesc:
      "A comparison between wooden and metal handicrafts for your home decor.",
    fullDesc:
      "Wooden handicrafts bring warmth, while metal sculptures offer durability. Choosing the right material depends on the aesthetic, longevity, and cultural significance...",
  },
];

const News = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleShow = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedNews(null);
  };

  return (
    <div
      className="py-16 min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-[#4a3d2f] mb-4"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "2.5rem",
              fontWeight: 600,
            }}
          >
            RUDRA ARTS NEWS
          </h1>
          <p className="text-[#4a3d2f] text-lg">
            Discover the rich heritage behind handcrafted art
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {NewsData.map((news) => (
            <div
              key={news.id}
              className="relative h-[500px] overflow-hidden bg-center bg-cover flex flex-col p-8 text-center text-[#4a3d2f] transition-transform duration-300 "
              style={{
                backgroundImage: `url(${cardBg})`, // Fixed card background
              }}
            >
              {/* Content */}
              <div className="flex flex-col items-center justify-center h-full ">
                {/* News Image */}
                <div className="w-32 h-32 mb-6">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* News Text */}
                <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
                <p className="text-base mb-6">{news.shortDesc}</p>
                <button
                  onClick={() => handleShow(news)}
                  className="bg-[#8C391B] text-white px-8 py-3 rounded hover:bg-[#732f16] transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-lg w-full relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedNews.title}
                </h2>
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-64 object-contain rounded mb-4"
                />
                <p className="text-gray-700">{selectedNews.fullDesc}</p>
              </div>

              {/* Footer */}
              <div className="p-4 flex justify-end">
                <button
                  onClick={handleClose}
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
