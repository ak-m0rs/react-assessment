// 

import { Container, Typography, Paper, Box, Button, Grid, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon, 
  Edit as EditIcon, 
  PersonAdd as PersonAddIcon, 
  Add as AddIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  BrushOutlined as BrushIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';

function FeatureCard({ icon, title, description }) {
  return (
    <Paper elevation={2} sx={{ 
      p: 3, 
      height: '100%',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
      },
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        background: 'linear-gradient(to bottom, #3a47d5, #00d2ff)'
      }
    }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 2,
        background: 'linear-gradient(45deg, rgba(58,71,213,0.1), rgba(0,210,255,0.1))',
        width: 'fit-content',
        p: 1,
        borderRadius: 2
      }}>
        {icon}
      </Box>
      <Typography variant="h6" component="h2" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
}

function Home() {
  return (
    <>
      <Box sx={{ 
        pt: 8, 
        pb: 10, 
        background: 'linear-gradient(135deg, #3a47d5 0%, #00d2ff 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              mb: 3,
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeIn 1s ease-out',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(-20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              }
            }}
          >
            Dash-Craft Platform
          </Typography>
          
          <Typography 
            variant="h6" 
            paragraph 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              opacity: 0.9,
              mb: 5,
              animation: 'fadeIn 1s ease-out 0.2s forwards',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            A powerful React application featuring interactive components, data management,
            and a sleek dashboard for visualizing your information.
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              mt: 4,
              animation: 'fadeIn 1s ease-out 0.4s forwards',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <Button 
              variant="contained" 
              component={Link} 
              to="/dashboard"
              startIcon={<DashboardIcon />}
              sx={{ 
                px: 3, 
                py: 1.2, 
                borderRadius: 2,
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                fontWeight: 'bold',
                '&:hover': {
                  background: 'rgba(255,255,255,0.3)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View Dashboard
            </Button>
            
            <Button 
              variant="outlined" 
              component={Link} 
              to="/user-form"
              startIcon={<PersonAddIcon />}
              sx={{ 
                px: 3, 
                py: 1.2, 
                borderRadius: 2,
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  borderColor: 'white',
                  background: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          Key Features
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard 
              icon={<AddIcon sx={{ color: '#3a47d5' }} />}
              title="Interactive Counter"
              description="Experience a sophisticated counter with animated background effects and local storage persistence for session tracking."
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard 
              icon={<PersonAddIcon sx={{ color: '#3a47d5' }} />}
              title="User Data Form"
              description="Comprehensive user profile management with data validation and secure local storage for quick retrieval."
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard 
              icon={<EditIcon sx={{ color: '#3a47d5' }} />}
              title="Rich Text Editor"
              description="Full-featured text editor with formatting options, allowing you to create and save content with styling intact."
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <FeatureCard 
              icon={<DashboardIcon sx={{ color: '#3a47d5' }} />}
              title="Analytics Dashboard"
              description="Visualize your data with our intuitive dashboard featuring charts, metrics, and user profile information."
            />
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: 8, 
            mb: 4,
            p: 5,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(58,71,213,0.05) 0%, rgba(0,210,255,0.05) 100%)',
          }}
        >
          <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
            Ready to See it in Action?
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Explore our interactive components and see how they can help streamline your workflow and data visualization needs.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button 
                variant="contained" 
                component={Link} 
                to="/counter"
                startIcon={<AddIcon />}
                sx={{ 
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 'medium',
                  background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                  }
                }}
              >
                Try Counter
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                component={Link} 
                to="/user-form"
                startIcon={<PersonAddIcon />}
                sx={{ 
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 'medium',
                  background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                  }
                }}
              >
                User Form
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                component={Link} 
                to="/text-editor"
                startIcon={<EditIcon />}
                sx={{ 
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 'medium',
                  background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                  }
                }}
              >
                Text Editor
              </Button>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                component={Link} 
                to="/dashboard"
                startIcon={<DashboardIcon />}
                sx={{ 
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 'medium',
                  background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                  }
                }}
              >
                Dashboard
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      {/* Footer */}
      <Box sx={{ 
        bgcolor: '#1a1a2e', 
        color: 'white', 
        py: 6,
        mt: 6
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                Dash-Craft
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
                An intuitive platform for data visualization and management with a sleek, modern interface.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                Features
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.7 }}>
                • Interactive Counter<br />
                • User Data Management<br />
                • Rich Text Editing<br />
                • Data Visualization<br />
                • Responsive Design
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link to="/counter" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Counter</Link>
                <Link to="/user-form" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>User Form</Link>
                <Link to="/text-editor" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Text Editor</Link>
                <Link to="/dashboard" style={{ color: 'white', opacity: 0.7, textDecoration: 'none' }}>Dashboard</Link>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          
          <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} Dash-Craft. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Home;