import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <Box
      sx={{ padding: { xs: 2, md: 5 }, backgroundColor: "#f9f9f9" }}
      className="my-16"
    >
      {/* Page Title */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Reach out to us and become a part of our timeless journey.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <Box component="form">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Our Details
            </Typography>
            <Typography>
              <strong>Address:</strong> 123 Heritage Street, Pune, Maharashtra
            </Typography>
            <Typography>
              <strong>Email:</strong>{" "}
              <Link href="mailto:contact@rudraarts.com">
                contact@rudraarts.com
              </Link>
            </Typography>
            <Typography>
              <strong>Phone:</strong>{" "}
              <Link href="tel:+911234567890">+91 1234567890</Link>
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" underline="hover" color="primary">
                Home
              </Link>
              <Link href="/products" underline="hover" color="primary">
                Products
              </Link>
              <Link href="/about" underline="hover" color="primary">
                About Us
              </Link>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box textAlign="center">
              <Button
                variant="contained"
                color="success"
                startIcon={<FaWhatsapp />}
                href="https://wa.me/1234567890"
                target="_blank"
              >
                Connect on WhatsApp
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
