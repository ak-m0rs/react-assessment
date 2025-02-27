// import { useState, useEffect } from 'react';
// import { Box, Button, Typography, Container } from '@mui/material';
// import { useSpring, animated } from 'react-spring';

// function Counter() {
//   const [count, setCount] = useState(() => {
//     const savedCount = localStorage.getItem('count');
//     return savedCount ? parseInt(savedCount) : 0;
//   });

//   useEffect(() => {
//     localStorage.setItem('count', count);
//   }, [count]);

//   // Background animation based on count
//   const animatedBackground = useSpring({
//     height: `${Math.min(count * 5, 100)}%`, // Limiting to 100%
//     config: { tension: 120, friction: 14, precision: 0.1 },
//   });

//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
//   const reset = () => setCount(0);

//   return (
//     <Container maxWidth="sm">
//       <Box 
//         sx={{ 
//           height: '400px', 
//           position: 'relative', 
//           overflow: 'hidden',
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           mt: 4,
//           mb: 2
//         }}
//       >
//         <animated.div
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             background: 'linear-gradient(0deg, #4dabf5 0%, #1976d2 100%)',
//             ...animatedBackground
//           }}
//         />
//         <Box 
//           sx={{ 
//             height: '100%', 
//             display: 'flex', 
//             flexDirection: 'column', 
//             justifyContent: 'center', 
//             alignItems: 'center',
//             position: 'relative',
//             zIndex: 1
//           }}
//         >
//           <Typography variant="h2" component="div" sx={{ color: count > 10 ? 'white' : 'black' }}>
//             {count}
//           </Typography>
//         </Box>
//       </Box>
      
//       <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
//         <Button variant="contained" onClick={increment}>Increment</Button>
//         <Button variant="contained" color="secondary" onClick={decrement}>Decrement</Button>
//         <Button variant="outlined" onClick={reset}>Reset</Button>
//       </Box>
//     </Container>
//   );
// }

// export default Counter;

import { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import { useSpring, animated, config } from 'react-spring';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount) : 0;
  });
  const [incrementEffect, setIncrementEffect] = useState(false);
  const [decrementEffect, setDecrementEffect] = useState(false);
  const [resetEffect, setResetEffect] = useState(false);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  // Background animation based on count
  const animatedBackground = useSpring({
    height: `${Math.min(count * 5, 100)}%`, // Limiting to 100%
    config: { tension: 120, friction: 14, precision: 0.1 },
  });

  // Number animation when count changes
  const numberAnimation = useSpring({
    number: count,
    from: { number: 0 },
    config: config.gentle,
  });

  // Component fade in animation
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle
  });

  const increment = () => {
    setIncrementEffect(true);
    setCount(prev => prev + 1);
    setTimeout(() => setIncrementEffect(false), 300);
  };
  
  const decrement = () => {
    if (count > 0) {
      setDecrementEffect(true);
      setCount(prev => prev - 1);
      setTimeout(() => setDecrementEffect(false), 300);
    }
  };
  
  const reset = () => {
    setResetEffect(true);
    setCount(0);
    setTimeout(() => setResetEffect(false), 300);
  };

  // Button animations
  const incrementButtonProps = useSpring({
    scale: incrementEffect ? 1.1 : 1,
    backgroundColor: incrementEffect ? 'rgba(0, 200, 83, 0.8)' : '#1976d2',
    config: { tension: 300, friction: 10 }
  });

  const decrementButtonProps = useSpring({
    scale: decrementEffect ? 1.1 : 1,
    backgroundColor: decrementEffect ? 'rgba(220, 0, 78, 0.8)' : '#dc004e',
    config: { tension: 300, friction: 10 }
  });

  const resetButtonProps = useSpring({
    scale: resetEffect ? 1.1 : 1,
    config: { tension: 300, friction: 10 }
  });

  return (
    <Container maxWidth="sm">
      <animated.div style={fadeIn}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4,
            mt: 4,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
              mb: 3,
              fontWeight: 600, 
              letterSpacing: 0.5 
            }}
          >
            Interactive Counter
          </Typography>
          
          <Box 
            sx={{ 
              height: '400px', 
              width: '100%',
              position: 'relative', 
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: '12px',
              mb: 3,
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <animated.div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                background: 'linear-gradient(0deg, #4dabf5 0%, #1976d2 100%)',
                ...animatedBackground
              }}
            />
            <Box 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}
            >
              <animated.div
                style={{
                  fontSize: '5rem',
                  fontWeight: 'bold',
                  color: count > 10 ? 'white' : 'black',
                  textShadow: count > 10 ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                }}
              >
                {numberAnimation.number.to(n => Math.floor(n))}
              </animated.div>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <animated.div style={incrementButtonProps}>
              <Button 
                variant="contained" 
                onClick={increment}
                startIcon={<AddIcon />}
                sx={{
                  minWidth: '120px',
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
                Increment
              </Button>
            </animated.div>
            
            <animated.div style={decrementButtonProps}>
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={decrement}
                startIcon={<RemoveIcon />}
                sx={{
                  minWidth: '120px',
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
                disabled={count === 0}
              >
                Decrement
              </Button>
            </animated.div>
            
            <animated.div style={resetButtonProps}>
              <Button 
                variant="outlined" 
                onClick={reset}
                startIcon={<RestartAltIcon />}
                sx={{
                  minWidth: '120px',
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
                disabled={count === 0}
              >
                Reset
              </Button>
            </animated.div>
          </Box>
        </Paper>
      </animated.div>
    </Container>
  );
}

export default Counter;