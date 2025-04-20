import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./Blogs.css"; // Custom styles
import img1 from "../../assets/images/blog1.jpg";
import img2 from "../../assets/images/blog2.jpg";
import img3 from "../../assets/images/blog3.jpg";

// Blog Data
const blogData = [
  {
    id: 1,
    title: "With Vicky Kaushal",
    image: img1,
    shortDesc:
      "मागील कित्येक महिन्यांपासून ‘छावा’ या छत्रपती संभाजी महाराजांच्या आयुष्यावर आधारित....",
    fullDesc:
      "मागील कित्येक महिन्यांपासून ‘छावा’ या छत्रपती संभाजी महाराजांच्या आयुष्यावर आधारित चित्रपटासाठी ‘इतिहास सल्लागार’ म्हणून मी आणि चंद्रहास काम करत आहोत. या चित्रपटाचे शूटिंग सुरू असून अभिनेता विकी कौशल मुख्य भूमिकेत आहे काल रूद्र आर्ट्स मार्फत तयार करण्यात आलेली रौद्र शंभू छत्रपती यांची प्रतिमा विकी कौशल, चित्रपटाचे DOP लक्ष्मण उतेकर आणि executive प्रोड्युसर संजीव सर यांना भेट दिली. विकी कौशल यांच्यासोबत छत्रपती संभाजी महाराजांच्या इतिहासावर चर्चा केली. त्यांनी या चित्रपटासाठी विशेष मेहनत घेतली आहे बॉलिवूडमध्ये प्रथमच एवढ्या भव्य स्वरुपात छत्रपती संभाजी महाराजांच्या इतिहासावर चित्रपटाची निर्मिती होत आहे, ही ऐतिहासिक गोष्ट आहे. या भव्यदिव्य प्रोजेक्ट साठी काम करण्याची संधी उपलब्ध झाली, ही शिवछत्रपतींची कृपा आणि तुम्हा सर्वांचे प्रेम..",
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

const Blogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Handle modal open
  const handleShow = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  // Handle modal close
  const handleClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <div className="blogs-section">
      <Container className="mt-5 pt-5">
        <Row className="justify-content-center text-center mt-3">
          <Col md={8}>
            <h1 className="blogs-title">Rudra Arts Blogs</h1>
            <p className="blogs-subtitle">
              Discover the rich heritage behind handcrafted art
            </p>
          </Col>
        </Row>

        {/* Blog List */}
        <Row className="mt-5">
          {blogData.map((blog) => (
            <Col md={4} key={blog.id} className="mb-4">
              <Card className="blog-card">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  className="blog-image"
                />
                <Card.Body>
                  <Card.Title className="blog-title">{blog.title}</Card.Title>
                  <Card.Text className="blog-shortDesc">
                    {blog.shortDesc}
                  </Card.Text>
                  <Button variant="dark" onClick={() => handleShow(blog)}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Popup Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        {selectedBlog && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedBlog.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="modal-image"
              />
              <p className="blog-fullDesc mt-3">{selectedBlog.fullDesc}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Blogs;
