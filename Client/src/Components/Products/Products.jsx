import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL_PRODUCTION}/api/products`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
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

  // Send WhatsApp message for the product
  const sendWhatsAppMessage = async (productId) => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL_PRODUCTION
        }/api/products/${productId}/whatsapp-message`
      );
      const data = await response.json();

      if (data.whatsappURL) {
        window.open(data.whatsappURL, "_blank"); // Open WhatsApp with the product details
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Display loading spinner if data is being fetched
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="product-container">
      {/* Section Title */}
      <div className="product-section-title">
        <h3>Timeless Artifacts</h3>
        <p>Reliving History Through Every Creation</p>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.product_image}
              alt={product.product_name}
              className="product-image"
            />
            <div className="product-details">
              <h4>{product.product_name}</h4>
              <p>{product.product_description}</p>
              <span className="product-price">₹ {product.product_price}</span>
              <button
                className="contact-button"
                onClick={() => sendWhatsAppMessage(product._id)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-button">
        <button onClick={() => navigate("/products")}>See More</button>
      </div>
    </div>
  );
};

export default Product;
