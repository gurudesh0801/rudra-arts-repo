import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";
import p4 from "../../assets/images/p4.jpg";

// All categories & products
const productCategories = [
  {
    category: "Maratha Legacy",
    products: [
      {
        id: 1,
        name: "सह्याद्रीपती राजा शिवछत्रपती",
        image: p1,
        price: "₹2,499",
        description: "A handcrafted murti of Chhatrapati Shivaji Maharaj...",
      },
      {
        id: 2,
        name: "गुर्जदार मावळा",
        image: p2,
        price: "₹3,499",
        description: "A finely crafted Mavala figurine honoring warriors...",
      },
    ],
  },
  {
    category: "Rajput Glory",
    products: [
      {
        id: 3,
        name: "वीर शिरोमणी महाराणा प्रताप जी",
        image: p3,
        price: "₹7,999",
        description: "Maharana Pratap handcrafted artifacts...",
      },
      {
        id: 4,
        name: "राजपूती कटार",
        image: p4,
        price: "₹5,499",
        description: "A beautifully crafted Rajputi Katar...",
      },
    ],
  },
  {
    category: "Spiritual Heritage",
    products: [
      {
        id: 5,
        name: "श्री गणेश मूर्ति",
        image: p4,
        price: "₹3,999",
        description: "A divine handcrafted idol of Lord Ganesha...",
      },
      {
        id: 6,
        name: "महाकाल शिवलिंग",
        image: p4,
        price: "₹6,999",
        description: "A sacred Mahakal Shivling, intricately designed...",
      },
    ],
  },
];

const AllProducts = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productCategories.flatMap((category) => category.products)
      : productCategories.find(
          (category) => category.category === selectedCategory
        )?.products || [];

  return (
    <Box sx={{ py: 5, backgroundColor: "#f4f4f4" }}>
      <Container>
        {/* Section Title */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontFamily: "Georgia, serif", color: "#3E2723" }}
          >
            Explore All Collections
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Georgia, serif", color: "#5D4037" }}
          >
            Find the finest handcrafted artifacts from history.
          </Typography>
        </Box>

        {/* Category Filter */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              {productCategories.map((category, index) => (
                <MenuItem key={index} value={category.category}>
                  {category.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                sx={{
                  maxWidth: 345,
                  borderRadius: 3,
                  boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fdf8f3",
                  border: "1px solid #D7CCC8", // Light brown border for a vintage feel
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Georgia, serif",
                      color: "#3E2723",
                      fontWeight: "bold",
                      marginBottom: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Georgia, serif",
                      color: "#5D4037",
                      marginBottom: 1,
                      fontStyle: "italic",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#3E2723",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      marginBottom: 1,
                    }}
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#3E2723",
                      color: "#3E2723",
                      fontFamily: "Georgia, serif",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#3E2723",
                        color: "#fff",
                      },
                    }}
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Back to Home Button */}
        <Box textAlign="center" mt={4}>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Georgia, serif",
              color: "#3E2723",
              borderColor: "#3E2723",
              "&:hover": {
                backgroundColor: "#3E2723",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AllProducts;
