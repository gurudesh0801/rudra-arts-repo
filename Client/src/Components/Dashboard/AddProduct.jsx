// src/components/AddProduct.js
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";
import DashboardLayout from "./DashboardLayout";

const AddProduct = ({ onProductAdded }) => {
  const [form, setForm] = useState({
    pname: "",
    pid: "",
    pprice: "",
    pimage: null,
    pdescription: "",
    psize: "",
    pcategory: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(form)) {
        formData.append(key, value);
      }

      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }

      if (onProductAdded) {
        onProductAdded(); // <-- only if provided
      }

      setForm({
        pname: "",
        pid: "",
        pprice: "",
        pimage: null,
        pdescription: "",
        psize: "",
        pcategory: "",
      });
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Add Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Product Name"
                name="pname"
                value={form.pname}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Product ID"
                name="pid"
                value={form.pid}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Price (₹)"
                type="number"
                name="pprice"
                value={form.pprice}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Size"
                name="psize"
                value={form.psize}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Category"
                name="pcategory"
                value={form.pcategory}
                onChange={handleChange}
                fullWidth
                required
              />
              <Button variant="outlined" component="label" fullWidth>
                {form.pimage ? form.pimage.name : "Upload Image"}
                <input
                  type="file"
                  hidden
                  name="pimage"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </Button>
              <TextField
                label="Description"
                name="pdescription"
                value={form.pdescription}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
              >
                Add Product
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default AddProduct;
