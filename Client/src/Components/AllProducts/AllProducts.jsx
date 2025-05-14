import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  useTheme,
  Chip,
  Rating,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Favorite,
  FavoriteBorder,
  FilterList,
  Mail,
} from "@mui/icons-material";
import p1 from "../../assets/images/p1.jpg";
import p2 from "../../assets/images/p2.jpg";
import p3 from "../../assets/images/p3.jpg";

// Enhanced product data with more details
const productCategories = [
  {
    category: "Maratha Legacy",
    icon: "⚔️",
    products: [
      {
        id: 1,
        name: "सह्याद्रीपती राजा शिवछत्रपती",
        image: p1,
        price: 2499,
        originalPrice: 2999,
        description:
          "Handcrafted with premium clay and natural colors, this murti captures the regal essence of Chhatrapati Shivaji Maharaj in intricate detail.",
        rating: 4.8,
        reviews: 124,
        materials: ["Clay", "Natural Pigments"],
        dimensions: "12 x 8 x 4 inches",
        deliveryTime: "3-5 business days",
        isFavorite: false,
        tags: ["Best Seller", "Limited Edition"],
      },
      {
        id: 2,
        name: "गुर्जदार मावळा",
        image: p2,
        price: 3499,
        originalPrice: 3999,
        description:
          "This finely crafted Mavala figurine honors the legendary warriors with authentic attire and weaponry details.",
        rating: 4.6,
        reviews: 89,
        materials: ["Brass", "Wood Base"],
        dimensions: "10 x 6 x 3 inches",
        deliveryTime: "5-7 business days",
        isFavorite: true,
        tags: ["New Arrival"],
      },
    ],
  },
  {
    category: "Rajput Glory",
    icon: "🛡️",
    products: [
      {
        id: 3,
        name: "वीर शिरोमणी महाराणा प्रताप जी",
        image: p3,
        price: 7999,
        originalPrice: 8999,
        description:
          "Premium quality handcrafted artifact depicting Maharana Pratap on his loyal horse Chetak, with gold accent details.",
        rating: 4.9,
        reviews: 156,
        materials: ["Bronze", "Marble Base"],
        dimensions: "15 x 10 x 6 inches",
        deliveryTime: "7-10 business days",
        isFavorite: false,
        tags: ["Premium Collection"],
      },
      {
        id: 4,
        name: "राजपूती कटार",
        image: p3,
        price: 5499,
        originalPrice: 6499,
        description:
          "Authentically designed Rajputi Katar with intricate engravings, comes with a velvet display stand.",
        rating: 4.7,
        reviews: 67,
        materials: ["Steel", "Silver Inlay"],
        dimensions: "18 inches length",
        deliveryTime: "4-6 business days",
        isFavorite: false,
        tags: ["Handcrafted"],
      },
    ],
  },
  {
    category: "Spiritual Heritage",
    icon: "🕉️",
    products: [
      {
        id: 5,
        name: "श्री गणेश मूर्ति",
        image: p2,
        price: 3999,
        originalPrice: 4599,
        description:
          "Divine handcrafted idol of Lord Ganesha with traditional motifs, perfect for home shrines and meditation spaces.",
        rating: 4.8,
        reviews: 210,
        materials: ["Panchdhatu", "Gold Polish"],
        dimensions: "8 x 6 x 3 inches",
        deliveryTime: "3-5 business days",
        isFavorite: true,
        tags: ["Best Seller"],
      },
      {
        id: 6,
        name: "महाकाल शिवलिंग",
        image: p1,
        price: 6999,
        originalPrice: 7999,
        description:
          "Sacred Mahakal Shivling with intricate designs, accompanied by a copper yoni peetham for complete worship.",
        rating: 4.9,
        reviews: 178,
        materials: ["Black Stone", "Copper"],
        dimensions: "10 x 10 x 5 inches",
        deliveryTime: "5-8 business days",
        isFavorite: false,
        tags: ["Ritual Ready"],
      },
    ],
  },
];

const AllProducts = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(
    productCategories.flatMap((c) =>
      c.products.map((p) => ({
        ...p,
        category: c.category,
        categoryIcon: c.icon,
      }))
    )
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleFavorite = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const handleEnquiry = (productId) => {
    // Implement enquiry functionality
    console.log(`Enquiry sent for product ${productId}`);
    // You can replace this with actual enquiry logic or navigation to enquiry form
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = [
    "All",
    ...productCategories.map((c) => `${c.icon} ${c.category}`),
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 6 }} className="my-12">
      {/* Hero Section */}
      <Box
        sx={{
          borderRadius: 4,
          p: 6,
          mb: 6,
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: isMobile ? "2.5rem" : "3.5rem" }}
        >
          Heritage Artisans Collection
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto", mb: 4 }}>
          Handcrafted with devotion, each piece tells a story of our glorious
          past and spiritual traditions
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 4,
            borderRadius: 2,
            fontWeight: "bold",
            boxShadow: 4,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 6,
            },
          }}
        >
          Explore Craftsmanship
        </Button>
      </Box>

      {/* Category Filter */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 3 : 0,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {selectedCategory === "All"
            ? "All Heritage Collections"
            : selectedCategory.replace(/^[^ ]+ /, "")}
          <Typography variant="body1" color="text.secondary">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "item" : "items"}
          </Typography>
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Filter by Category</InputLabel>
            <Select
              value={selectedCategory}
              label="Filter by Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{ borderRadius: 2 }}
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            sx={{ borderRadius: 2 }}
          >
            More Filters
          </Button>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                borderRadius: 3,
                height: "100%",
                maxWidth: isMobile ? 260 : 300, // Adjusting card width for mobile
                m: 1,
                display: "flex",
                flexDirection: "column",
                boxShadow: 2,
                transition: "all 0.3s ease-in-out",
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Product Tags */}
              {product.tags && product.tags.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  {product.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        fontSize: isMobile ? "0.75rem" : "1rem",
                      }}
                    />
                  ))}
                </Box>
              )}
              {/* Product Image */}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: isMobile ? "1.2rem" : "1.4rem" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {product.description.length > 80
                    ? `${product.description.slice(0, 80)}...`
                    : product.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: isMobile ? "1rem" : "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{product.price}
                  </Typography>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    size={isMobile ? "small" : "medium"}
                    readOnly
                  />
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: isMobile ? 1 : 2,
                }}
              >
                <IconButton
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="add to favorites"
                >
                  {product.isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <IconButton
                  onClick={() => handleEnquiry(product.id)}
                  aria-label="enquire"
                >
                  <Mail />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;
