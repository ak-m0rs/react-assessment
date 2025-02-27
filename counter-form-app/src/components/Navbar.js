// import { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AuthStatus from './AuthStatus';
// import { auth } from '../utils/auth';

// function Navbar() {
//   const [isAuthenticated, setIsAuthenticated] = useState(auth.checkAuth()); // Ensure initial state is correct

//   useEffect(() => {
//     const handleAuthChange = () => {
//       setIsAuthenticated(auth.checkAuth()); // Update state when auth changes
//     };

//     window.addEventListener('authChange', handleAuthChange);

//     return () => {
//       window.removeEventListener('authChange', handleAuthChange);
//     };
//   }, []);

//   console.log(isAuthenticated);

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//                 Dash-Craft
//           </Link>
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Button color="inherit" component={Link} to="/counter">Counter</Button>
//           {/* Only show these navigation items when logged in */}
//           {isAuthenticated && (
//             <>
                
//               <Button color="inherit" component={Link} to="/user-form">User Form</Button>
//               <Button color="inherit" component={Link} to="/text-editor">Text Editor</Button>
//               <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//             </>
//           )}
//           <AuthStatus />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  useScrollTrigger, 
  Slide,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  alpha
} from '@mui/material';
import { Link } from 'react-router-dom';
import AuthStatus from './AuthStatus';
import { auth } from '../utils/auth';
import { 
  Dashboard as DashboardIcon,
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
  Add as AddIcon,
  Menu as MenuIcon 
} from '@mui/icons-material';

// Hide app bar on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(auth.checkAuth());
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(auth.checkAuth());
    };

    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const navLinks = [
    { text: 'Counter', path: '/counter', icon: <AddIcon fontSize="small" />, always: true },
    { text: 'User Form', path: '/user-form', icon: <PersonAddIcon fontSize="small" />, auth: true },
    { text: 'Text Editor', path: '/text-editor', icon: <EditIcon fontSize="small" />, auth: true },
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon fontSize="small" />, auth: true }
  ];

  const filteredLinks = navLinks.filter(link => 
    link.always || (link.auth && isAuthenticated)
  );

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)'
          }
        }}
      >
        <Toolbar sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit", display: 'flex', alignItems: 'center' }}>
              <Box 
                component="span" 
                sx={{ 
                  display: 'inline-block',
                  borderRadius: '50%',
                  bgcolor: alpha('#fff', 0.2),
                  p: 0.8,
                  mr: 1,
                  boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                  animation: 'pulse 2s infinite'
                }}
              >
                <DashboardIcon />
              </Box>
              Canvas
            </Link>
          </Typography>

          {isMobile ? (
            <Box>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  '& .MuiPaper-root': {
                    borderRadius: 2,
                    mt: 1.5,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  }
                }}
              >
                {filteredLinks.map((link) => (
                  <MenuItem 
                    key={link.path} 
                    component={Link} 
                    to={link.path} 
                    onClick={handleClose}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 1.5,
                      px: 2,
                      transition: 'background 0.2s',
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.1)
                      }
                    }}
                  >
                    {link.icon}
                    {link.text}
                  </MenuItem>
                ))}
                <Box sx={{ px: 2, py: 1.5 }}>
                  <AuthStatus />
                </Box>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {filteredLinks.map((link) => (
                <Button 
                  key={link.path}
                  color="inherit" 
                  component={Link} 
                  to={link.path}
                  startIcon={link.icon}
                  sx={{
                    mx: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      '&:before': {
                        transform: 'translateX(0)'
                      }
                    },
                    '&:active': {
                      transform: 'translateY(0)',
                      boxShadow: 'none'
                    }
                  }}
                >
                  {link.text}
                </Button>
              ))}
              <Box sx={{ ml: 2 }}>
                <AuthStatus />
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;