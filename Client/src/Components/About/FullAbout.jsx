import { Button, Typography, Avatar } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import InsightsIcon from "@mui/icons-material/Insights";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const FullAbout = () => {
  return (
    <section className="w-full text-gray-900 font-sans mt-20">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center bg-[url('/images/bgimg.jpg')] py-24 px-6 text-white">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md font-viaoda">
            The Story Behind Rudra Arts
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow">
            Rudra Arts is more than a creative studio — we are the custodians of
            visual storytelling rooted in heritage and expressed through modern
            forms.
          </p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="mt-5 bg-red-700 hover:bg-white text-black font-semibold"
          >
            Explore Our Journey
          </Button>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 bg-[#fcf8f2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <BrushIcon fontSize="large" />,
              title: "Artistic Integrity",
              desc: "We honor the roots of Indian art and preserve authenticity across canvas, sculpture, and screen.",
            },
            {
              icon: <InsightsIcon fontSize="large" />,
              title: "Creative Innovation",
              desc: "We blend traditional art with modern technology — brush strokes with pixels, sculpture with storyboards.",
            },
            {
              icon: <Diversity2Icon fontSize="large" />,
              title: "Cultural Connection",
              desc: "We build bridges between generations — reviving traditions and embracing modern perspectives.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <Avatar
                sx={{ bgcolor: "#6c584c", width: 70, height: 70 }}
                className="mx-auto group-hover:scale-110 transition-transform"
              >
                {item.icon}
              </Avatar>
              <Typography
                variant="h6"
                className="mt-5 font-bold text-[#3b2f2f]"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" className="mt-3 text-gray-700">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Artistic Vision */}
      <div className="relative bg-[#f2e9dc] py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#3b2f2f] mb-6">
            Our Artistic Vision
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Every creation at Rudra Arts carries soul, story, and substance.
            Whether it's a hand-painted mural or a handcrafted statue, our art
            connects emotion to expression — timeless yet modern.
          </p>
        </div>
      </div>

      {/* What We Create - Art Categories */}
      <div className="bg-[#fff9f4] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#3b2f2f] mb-10">
            What We Create
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Handcrafted Statues",
                desc: "Realistic sculptures made with devotion and precision, reflecting traditional mythology and modern themes.",
              },
              {
                title: "Wall Murals & Paintings",
                desc: "Vivid, soulful art pieces that bring stories to life through brushwork and texture.",
              },
              {
                title: "Decor & Installations",
                desc: "Unique handmade decor pieces for spiritual spaces, events, and modern interiors.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <h3 className="text-2xl font-semibold text-[#3b2f2f] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullAbout;
