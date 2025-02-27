import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Paper, Container, Typography, Button } from '@mui/material';
import { useSpring, animated, config } from 'react-spring';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function TextEditor() {
  const [content, setContent] = useState('');
  const [userData, setUserData] = useState(null);
  const [updateEffect, setUpdateEffect] = useState(false);
  
  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
      
      // Load saved editor content if exists
      const savedContent = localStorage.getItem('editorContent');
      if (savedContent) {
        setContent(savedContent);
      } else {
        // Create initial content with user data
        const userDataObj = JSON.parse(savedUserData);
        const initialContent = `
          <h2>User Profile</h2>
          <p><strong>Name:</strong> ${userDataObj.name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${userDataObj.email || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${userDataObj.phone || 'Not provided'}</p>
          <p><strong>Address:</strong> ${userDataObj.address || 'Not provided'}</p>
        `;
        setContent(initialContent);
      }
    }
  }, []);
  
  // Handle content change
  const handleChange = (value) => {
    setContent(value);
    localStorage.setItem('editorContent', value);
  };
  
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image'
  ];
  
  // Reset editor to initial state with user data with animation
  const resetEditor = () => {
    if (userData) {
      setUpdateEffect(true);
      
      const initialContent = `
        <h2>User Profile</h2>
        <p><strong>Name:</strong> ${userData.name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${userData.email || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${userData.phone || 'Not provided'}</p>
        <p><strong>Address:</strong> ${userData.address || 'Not provided'}</p>
      `;
      
      // Use a small delay for the animation effect
      setTimeout(() => {
        setContent(initialContent);
        localStorage.setItem('editorContent', initialContent);
        
        // Reset the update animation after a moment
        setTimeout(() => {
          setUpdateEffect(false);
        }, 1000);
      }, 200);
    }
  };

  // Fade in animation
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle
  });

  // Animation for editor container
  const editorAnimation = useSpring({
    boxShadow: updateEffect 
      ? '0 0 20px rgba(25, 118, 210, 0.5)' 
      : '0 8px 16px rgba(0, 0, 0, 0.1)',
    transform: updateEffect ? 'scale(1.01)' : 'scale(1)',
  });

  // Button hover animation
  const buttonHover = useSpring({
    transform: updateEffect ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <animated.div style={fadeIn}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3,
            borderRadius: '12px',
            transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              transform: 'translateY(-2px)',
            }
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              letterSpacing: 0.5,
              mb: 3
            }}
          >
            Rich Text Editor
          </Typography>
          
          {!userData ? (
            <Typography color="error">
              No user data found. Please fill out the user form first.
            </Typography>
          ) : (
            <>
              <animated.div style={editorAnimation}>
                <Box sx={{ 
                  height: 400, 
                  mb: 2,
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  '.ql-toolbar': {
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  },
                  '.ql-container': {
                    border: 'none',
                    fontSize: '16px',
                  },
                  '.ql-editor': {
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    padding: '16px',
                  }
                }}>
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    modules={modules}
                    formats={formats}
                    style={{ 
                      height: '350px',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
              </animated.div>
              
              <animated.div style={buttonHover}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button 
                    variant="outlined" 
                    onClick={resetEditor}
                    endIcon={<RestartAltIcon />}
                    sx={{
                      borderRadius: '28px',
                      textTransform: 'none',
                      fontWeight: 600,
                      padding: '8px 22px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      }
                    }}
                  >
                    Update with User Data
                  </Button>
                </Box>
              </animated.div>
            </>
          )}
        </Paper>
      </animated.div>
    </Container>
  );
}

export default TextEditor;