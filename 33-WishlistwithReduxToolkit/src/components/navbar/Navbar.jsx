import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Wrapper from '../wrapper/Wrapper';

const pages = ['Products', 'About', 'Contact'];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState(null);
  const baseUrl = "http://localhost:3000/posts";

  const getUser = async () => {
    const { data } = await axios.get(baseUrl);
    const loggedIn = data.find(u => u.isLogined === true);
    setUser(loggedIn || null);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    if (user) {
      await axios.patch(`${baseUrl}/${user.id}`, { isLogined: false });
      toast.success("Logout");
      setUser(null);
      setTimeout(() => navigate('/'), 1000);
    }
  };

  const handleMenuClick = (setting) => {
    handleCloseUserMenu();

    if (setting === 'Login') {
      toast.info("Login page to");
      setTimeout(() => navigate('/login'), 1000);
    } else if (setting === 'Register') {
      toast.info("Register page to");
      setTimeout(() => navigate('/register'), 1000);
    } else if (setting === 'Logout') {
      handleLogout();
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Navbar
            </Typography>

            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

           
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user ? (
                  <MenuItem onClick={() => handleMenuClick('Logout')}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem onClick={() => handleMenuClick('Login')}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleMenuClick('Register')}>
                      <Typography textAlign="center">Register</Typography>
                    </MenuItem>
                  </>
                )}
                
              </Menu>
               <Wrapper/>
            </Box>

          </Toolbar>
          
        </Container>
        <ToastContainer position="top-right" autoClose={1000} />

       
      </AppBar>

      
    </>
  );
}

export default Navbar;