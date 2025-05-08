import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthActions } from './../../Store/Auth';
import { useDispatch } from 'react-redux';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const Dispatch = useDispatch()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
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
      email: formData.email,
      password: formData.password
    }
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:8080/api/v1/auth/login`, Data);
      if (response.data.success === true) {
        setLoading(false);
        localStorage.setItem("id", response.data.Id)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("role", response.data.isAdmin)
        alert(response.data.message);
        Dispatch(AuthActions.Login())
        Dispatch(AuthActions.ChangeRole(response.data.isAdmin))
        navigate("/")
      }
    } catch (error) {
      console.error('Error fetching book:', error);
      setError(error.response.data.message);
      alert(error.response.data.message)
      setLoading(false);
    }
  };



  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Side Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90%', // Set height to 90%
          marginTop: "5%"
        }}
      >
        <img src="/Login.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
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
            Login
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Welcome back! Please enter your details to log in.
          </Typography>

          <form onSubmit={handleSubmit}>
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
                Loading ? <>Loading..</> : <> Login Your Account</>
              }
            </Button>
          </form>

          {/* Don't have an account */}
          <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
            Don’t have an account?{' '}
            <Link
              onClick={() => navigate('/register')}
              underline="hover"
              sx={{ cursor: 'pointer', color: 'primary.main' }}
            >
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;