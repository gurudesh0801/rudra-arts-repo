import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data
    fetch("https://rudra-arts-backend-repo.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const sendWhatsAppMessage = async (productId) => {
    try {
      const response = await fetch(
        `https://rudra-arts-backend-repo.onrender.com/api/products/${productId}/whatsapp-message`
      );
      const data = await response.json();

      if (data.whatsappURL) {
        window.open(data.whatsappURL, "_blank"); // Open WhatsApp with the product details
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="heritage-product-section">
      <Container className="mt-5">
        {/* Section Title */}
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="heritage-product-title">Timeless Artifacts</h1>
            <p className="heritage-product-subtitle">
              Reliving History Through Every Creation
            </p>
          </Col>
        </Row>

        {/* Product Cards */}
        <Row>
          {products.map((product) => (
            <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="heritage-product-card">
                <Card.Img
                  variant="top"
                  src={product.product_image}
                  className="heritage-product-image"
                />
                <Card.Body className="text-center">
                  <Card.Title className="heritage-product-name">
                    {product.product_name}
                  </Card.Title>
                  <Card.Text className="heritage-product-description">
                    {product.product_description}
                  </Card.Text>
                  <span className="heritage-product-price">
                    {product.product_price}
                  </span>
                  <Button
                    variant="success"
                    className="mt-2"
                    onClick={() => sendWhatsAppMessage(product._id)}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* See More Button */}
        <div className="text-center mt-4">
          <Button variant="outline-dark" onClick={() => navigate("/products")}>
            See More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Product;
