import React  from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { registerSchema } from '../../schema/registerSchema.js';
import {Container,TextField, Button,  Typography, Paper} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const RegisterPage = () => {

  const navigate=useNavigate()
  const {values,handleChange, handleSubmit, errors,resetForm} = useFormik({
    
    
      initialValues: {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLogined: false,
    },
   
    onSubmit: async (values) => {
      
       let url="http://localhost:3000/posts"
       
        const { data }=await axios.get(url)
        let existUser=data.find((user)=>user.username==values.username || user.email==values.email)
        if (!existUser) {
           try {
          await axios.post(url, values);
          toast.success("Giris ugurludur")
          setTimeout(() => {
            navigate('/login')
          }, 1000);

          resetForm();
      } catch  {
        toast.warn("error")
      }
        }
        else{
          toast.info("user already exists")
        }


    
      
    },
    validationSchema: registerSchema,
  });

  const {name, surname,username,email, password,confirmPassword} = values;
   

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Ad"
            name="name"
            value={name}
            onChange={handleChange}
          />
            {errors.name ? <span style={{ color: 'red' }}>{errors.name}</span> : null}

          <TextField
            fullWidth
            margin="normal"
            label="Soyad"
            name="surname"
            value={surname}
            onChange={handleChange}
          
          />
          {errors.surname ? <span style={{ color: 'red' }}>{errors.surname}</span> : null}

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
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          
          />
          {errors.email ? <span style={{ color: 'red' }}>{errors.email}</span> : null}
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
          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleChange}
          
          />
          {errors.confirmPassword ? <span style={{ color: 'red' }}>{errors.confirmPassword}</span> : null}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign up
          </Button>
        </form>
      </Paper>
       <ToastContainer position="top-right" autoClose={1000} />
    </Container>
  );
};

export default RegisterPage;
