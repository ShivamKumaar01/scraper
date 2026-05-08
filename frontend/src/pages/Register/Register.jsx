import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

import { useAuth } from "../../context/auth-context";

const Register = () => {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name cannot exceed 30 characters"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, {
        abortEarly: false,
      });

      setErrors({});

      await register(formData);
      setToastMessage("Account created successfully");
      setToastSeverity("success");
      setOpen(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      if (error.inner) {
        const newErrors = {};

        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });

        setErrors(newErrors);
      } else {

        setToastMessage(
          error.response?.data?.message || "Something went wrong"
        );

        setToastSeverity("error");

        setOpen(true);
      }
    }
  };

  return (
    <div className="register-container">
      <Box component="form" className="register-form" onSubmit={handleSubmit}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Sign Up
        </Typography>

        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <Button type="submit" variant="contained" size="large" fullWidth>
          Sign Up
        </Button>

        <Typography textAlign="center">
          Already have an account?
          <Link to="/login"> Login</Link>
        </Typography>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={toastSeverity}
          variant="filled"
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;