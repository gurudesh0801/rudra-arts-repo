import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, Box, Container, Grid } from "@mui/material";
import { Card, CardCover, CardContent, Typography } from "@mui/joy";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_PRODUCTION}/api/products`
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const sendWhatsAppMessage = async (productId) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL_PRODUCTION
        }/api/products/${productId}/whatsapp-message`
      );
      const data = await response.json();
      if (data.whatsappURL) window.open(data.whatsappURL, "_blank");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#fffaf0", py: 6 }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          textAlign="center"
          mb={6}
          sx={{
            color: "#ffd700",
            py: 4,
          }}
        >
          <Typography
            level="h1"
            sx={{
              color: "#706D54",
              fontSize: "3rem",
              fontFamily: "'Amita', serif",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            स्वराज्याची पवित्र कलाकृती
          </Typography>
          <Typography
            level="body-md"
            sx={{ fontStyle: "italic", fontWeight: 300 }}
          >
            Reliving History Through Every Creation
          </Typography>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Card sx={{ minHeight: 280, width: 320, position: "relative" }}>
                <CardCover>
                  <img
                    src={product.product_image}
                    alt={product.product_name}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </CardCover>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                  }}
                />
                <CardContent sx={{ justifyContent: "flex-end" }}>
                  <Typography level="title-lg" textColor="#fff">
                    {product.product_name}
                  </Typography>
                  <Typography textColor="neutral.300">
                    ₹ {product.product_price}
                  </Typography>
                  <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{
                      mt: 1,
                      backgroundColor: "#d2691e",
                      ":hover": { backgroundColor: "#a0522d" },
                    }}
                    onClick={() => sendWhatsAppMessage(product._id)}
                  >
                    More Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* See More Button */}
        <Box textAlign="center" mt={6}>
          <Button
            variant="outlined"
            onClick={() => navigate("/products")}
            sx={{
              borderColor: "#a0522d",
              color: "#a0522d",
              ":hover": {
                backgroundColor: "#fce7d2",
              },
            }}
          >
            See More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Product;
