import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Container,
  Box,
} from "@mui/material";

import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";
import aboutBg from "../../assets/images/about-bg.jpg";

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
    <Box
      sx={{
        py: 8,
        minHeight: "100vh",
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Container>
        {/* Heading */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight={600}
            color="#4a3d2f"
          >
            RUDRA ARTS NEWS
          </Typography>
          <Typography variant="h6" color="#4a3d2f">
            Discover the rich heritage behind handcrafted art
          </Typography>
        </Box>

        {/* News Grid */}
        <Grid container spacing={4}>
          {NewsData.map((news) => (
            <Grid item xs={12} sm={6} md={4} key={news.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  bgcolor: "white",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={news.image}
                  alt={news.title}
                  sx={{
                    width: "100%",
                    maxHeight: 250,
                    objectFit: "contain", // Show full image without cropping
                    mt: 1,
                    mb: 1,
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight="bold"
                    color="#4a3d2f"
                  >
                    {news.title}
                  </Typography>
                  <Typography variant="body2" paragraph color="#4a3d2f">
                    {news.shortDesc}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#8C391B",
                      "&:hover": { backgroundColor: "#732f16" },
                    }}
                    onClick={() => handleShow(news)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Modal Dialog */}
        <Dialog open={showModal} onClose={handleClose} maxWidth="sm" fullWidth>
          {selectedNews && (
            <>
              <DialogTitle>{selectedNews.title}</DialogTitle>
              <DialogContent dividers>
                <Box
                  component="img"
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Typography variant="body1">{selectedNews.fullDesc}</Typography>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default News;
