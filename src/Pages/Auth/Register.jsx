import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !formData.username || !formData.confirmPassword || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.username.length <= 4) {
      setError('Username must be greater than 4 characters');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    const Data = {
      name: formData.username,
      email: formData.email,
      password: formData.password
    }
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, Data);
      if (response.data.success === true) {
        setLoading(false);
        alert(response.data.message);
        navigate("/login")
      }
      if (response.data.success === false) {
        setLoading(false);
        alert(response.data.error);
      }
    } catch (error) {
      console.error('Error fetching book:', error);
      setError('Failed to fetch book. Please try again later.');
      setLoading(false);
    }


  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Side Video */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80%', // Set height to 90%
          marginTop: "5%"
        }}
      >
        <img src="/Register.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Box>
      {/* Right Side Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        {/* Logo */}
        <img src="/logo.png" alt="Logo" style={{ width: '150px', marginBottom: '2rem' }} />

        {/* Form */}
        <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Let’s get you all set up so you can access your personal account.
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            {/* Email */}
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            {/* Password */}
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            {/* Confirm Password */}
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            {/* Error Message */}
            {error && (
              <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
                {error}
              </Typography>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2, padding: 1 }}
            >
              {
                Loading ? <>
                  Loading...</> :
                  <>
                    Create account
                  </>
              }
            </Button>
          </form>

          {/* Already have an account */}
          <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
            Already have an account?{' '}
            <Link
              onClick={() => navigate('/login')}
              underline="hover"
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            >
              Login
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;