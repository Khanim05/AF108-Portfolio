import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { loginSchema } from '../../schema/loginSchema.js';
import {Container,TextField, Button, Box, Typography, Paper} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {

  const navigate=useNavigate()
  const {values,handleChange, handleSubmit, errors,resetForm} = useFormik({
    
    
      initialValues: {
      username: '',
      password: '',
      isLogined:false
    },
   
    onSubmit: async (values) => {
      try {
        const res = await axios.get('http://localhost:3000/posts');
        const user = res.data.find(
          (u) => u.username === values.username && u.password === values.password
        );
    
        if (user) {
          toast.success("Giris ugurludur")
          navigate('/')
        } else {
         toast.warn("Password veya username yanlisdir")
        }
      } catch{
        toast.warn("Error")
      }
    
      resetForm();
    },
    
    validationSchema: loginSchema
  });

  const {username, password,} = values;
   

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            name="username"
            value={username}
            onChange={handleChange}
            
          />
          {errors.username ? <span style={{ color: 'red' }}>{errors.username}</span> : null}
          
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          
          />
           {errors.password ? <span style={{ color: 'red' }}>{errors.password}</span> : null}
        
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign in
          </Button>
        </form>
      </Paper>
      <ToastContainer position="top-right" autoClose={1000} />
    </Container>
  );
};

export default LoginPage;
