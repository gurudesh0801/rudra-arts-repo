import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AllProduct.css";
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

  return (
    <div className="heritage-product-section">
      <Container className="mt-5">
        {/* Section Title */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="heritage-product-title">Explore All Collections</h1>
            <p className="heritage-product-subtitle">
              Find the finest handcrafted artifacts from history.
            </p>
          </Col>
        </Row>

        {/* Full Product List */}
        {productCategories.map((category, index) => (
          <div key={index} className="category-section mt-5">
            <h2 className="category-title">{category.category}</h2>
            <Row>
              {category.products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card className="heritage-product-card">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="heritage-product-image"
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="heritage-product-name">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="heritage-product-description">
                        {product.description}
                      </Card.Text>
                      <span className="heritage-product-price">
                        {product.price}
                      </span>
                      <Button
                        variant="dark"
                        className="heritage-buy-button mt-3"
                      >
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        {/* Back to Home Button */}
        <div className="text-center mt-4">
          <Button variant="outline-dark" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
