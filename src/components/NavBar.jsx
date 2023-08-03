import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          background: ' #4d4d00',
          borderBottom: '1px solid #eee',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1300, // theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleMenuToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ mr: 2 }}
              component="div"
              style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                color: 'yellow', // theme.palette.primary.main
                // marginRight: '16px', // theme.spacing(2)
                cursor: 'pointer',
              }}
            >
              POS
            </Typography>
            <div
              style={{
                position: 'relative',
                borderRadius: '4px', // theme.shape.borderRadius
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // alpha(theme.palette.common.black, 0.1)
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.15)', // alpha(theme.palette.common.black, 0.15)
                },
                marginLeft: 0,
                width: '100%',
              }}
            >
              <div
                style={{
                  padding: '0 16px', // theme.spacing(0, 2)
                  height: '100%',
                  position: 'absolute',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SearchIcon />
              </div>
              <InputBase
                style={{
                  color: 'inherit',
                  paddingLeft: 'calc(1em + 64px)', // `calc(1em + ${theme.spacing(4)})`
                  width: '100%',
                }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <VideoCallIcon />
            </IconButton>
            <IconButton color="inherit">
              <AppsIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu Items */}
      <Box
        sx={{
          position: 'fixed',
          top: '64px', // Height of the AppBar
          left: isMenuOpen ? 0 : '-250px',
          width: '250px',
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          zIndex: 1300, // theme.zIndex.drawer + 1
          transition: 'left 0.3s ease',
          height : '100%'

        }}
      >
        <Typography variant="h6" style={{ padding: '16px' }}>
          Home
        </Typography>
        <Typography variant="h6" style={{ padding: '16px' }}>
          Explore
        </Typography>
        <Typography variant="h6" style={{ padding: '16px' }}>
          Subscriptions
        </Typography>
        <Typography variant="h6" style={{ padding: '16px' }}>
          Library
        </Typography>
        {/* Add other menu items as needed */}
      </Box>

      {/* Add your main content here */}
      <Box component="main" style={{ marginTop: '64px' }}>
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
}

export default App;
