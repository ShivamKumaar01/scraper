import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
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

      await login(formData);

      navigate("/");
    } catch (error) {
      if (error.inner) {
        const newErrors = {};

        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });

        setErrors(newErrors);
      } else {
        alert(error.response?.data?.message || error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <Box component="form" className="login-form" onSubmit={handleSubmit}>
        <Typography variant="h4" textAlign="center" mb={2}>
          Login
        </Typography>

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
          Login
        </Button>

        <Typography textAlign="center">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
