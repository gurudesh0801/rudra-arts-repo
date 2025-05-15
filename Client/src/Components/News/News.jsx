import {
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";
import aboutBg from "../../assets/images/about-bg.jpg";

// News Data
const NewsData = [
  {
    id: 1,
    slug: "https://www.instagram.com/p/C6eK0gjtaOr/?hl=en&img_index=1", // external link
    title: "With Vicky Kaushal",
    image: img1,
    shortDesc:
      "मागील कित्येक महिन्यांपासून ‘छावा’ या छत्रपती संभाजी महाराजांच्या आयुष्यावर आधारित....",
    isExternal: true,
  },
  {
    id: 2,
    slug: "https://www.instagram.com/p/DGvmCIMM7QD/?hl=en", // internal
    title: "Rajputana & Maratha Warrior Sculptures",
    image: img2,
    shortDesc:
      "How warrior sculptures represent the bravery of Rajput and Maratha traditions.",
    isExternal: true,
  },
  {
    id: 3,
    slug: "https://www.instagram.com/p/DHXxaICtlkY/?hl=en", // internal
    title: "Wooden vs. Metal Handicrafts: Which is Better?",
    image: img3,
    shortDesc:
      "A comparison between wooden and metal handicrafts for your home decor.",
    isExternal: true,
  },
  {
    id: 4,
    slug: "https://www.instagram.com/p/DHXxaICtlkY/?hl=en", // internal
    title: "Wooden vs. Metal Handicrafts: Which is Better?",
    image: img3,
    shortDesc:
      "A comparison between wooden and metal handicrafts for your home decor.",
    isExternal: true,
  },
];

const News = () => {
  const navigate = useNavigate();

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
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight={600}
            color="#4a3d2f"
          >
            NEWS
          </Typography>
          <Typography variant="h6" color="#4a3d2f">
            Discover the rich heritage behind handcrafted art
          </Typography>
        </Box>

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
                    objectFit: "contain",
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
                  {news.isExternal ? (
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: "#8C391B",
                        "&:hover": { backgroundColor: "#732f16" },
                      }}
                      component="a"
                      href={news.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Instagram
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: "#8C391B",
                        "&:hover": { backgroundColor: "#732f16" },
                      }}
                      onClick={() => navigate(`/news/${news.slug}`)}
                    >
                      Read More
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
