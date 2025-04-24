import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import wallImg from "../../assets/images/tatbwall2.png";
import video from "../../assets/images/videoplayback(1).mp4";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Black overlay on top of the video */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
          zIndex: -1,
        }}
      />

      {/* Background Video */}
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      {/* Bottom-aligned Overlay Image */}
      <Box
        component="img"
        src={wallImg}
        alt="Bottom Overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          maxHeight: "25vh", // adjust height if needed
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 1 }}>
        <Typography
          variant="h3"
          color="white"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        >
          Timeless Creations, Crafted with Soul
        </Typography>

        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Discover the essence of heritage and artistry in every masterpiece. At
          Rudra Arts, we bring stories to life through intricate designs,
          preserving tradition while embracing creativity.
        </Typography>

        <Box mt={5}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white", // White background
              color: "black", // Black text color
              size: "large",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderRadius: "0px", // Optional: rounded corners
              "&:hover": {
                backgroundColor: "#f0f0f0", // Lighter background on hover
              },
            }}
          >
            Know More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
