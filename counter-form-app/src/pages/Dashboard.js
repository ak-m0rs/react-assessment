// import { useState, useEffect } from 'react';
// import { 
//   Container, 
//   Grid, 
//   Paper, 
//   Typography
// } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// function Dashboard() {
//   const [count, setCount] = useState(0);
//   const [userData, setUserData] = useState(null);
//   const [chartData, setChartData] = useState([]);
  
//   useEffect(() => {
//     // Load count data
//     const savedCount = localStorage.getItem('count');
//     if (savedCount) {
//       setCount(parseInt(savedCount));
//     }
    
//     // Load user data
//     const savedUserData = localStorage.getItem('userData');
//     if (savedUserData) {
//       setUserData(JSON.parse(savedUserData));
//     }
    
//     // Create mock chart data
//     const mockData = [
//       { name: 'Profile Views', value: Math.floor(Math.random() * 100) + 20 },
//       { name: 'Form Submissions', value: Math.floor(Math.random() * 50) + 5 },
//       { name: 'Text Edits', value: Math.floor(Math.random() * 30) + 10 },
//       { name: 'Counter Clicks', value: savedCount ? parseInt(savedCount) : 0 }
//     ];
//     setChartData(mockData);
//   }, []);
  
//   return (
//     <Container maxWidth="lg" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Dashboard
//       </Typography>
      
//       <Grid container spacing={3}>
//         {/* Counter Card */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 200 }}>
//             <Typography variant="h6" gutterBottom>
//               Counter Value
//             </Typography>
//             <Typography variant="h2" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               {count}
//             </Typography>
//           </Paper>
//         </Grid>
        
//         {/* User Profile Card */}
//         <Grid item xs={12} md={8}>
//           <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 200 }}>
//             <Typography variant="h6" gutterBottom>
//               User Profile
//             </Typography>
//             {userData ? (
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Typography><strong>ID:</strong> {userData.id}</Typography>
//                   <Typography><strong>Name:</strong> {userData.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography><strong>Email:</strong> {userData.email}</Typography>
//                   <Typography><strong>Phone:</strong> {userData.phone}</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography><strong>Address:</strong> {userData.address}</Typography>
//                 </Grid>
//               </Grid>
//             ) : (
//               <Typography color="text.secondary">No user data available</Typography>
//             )}
//           </Paper>
//         </Grid>
        
//         {/* Chart */}
//         <Grid item xs={12}>
//           <Paper elevation={3} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 400 }}>
//             <Typography variant="h6" gutterBottom>
//               User Activity
//             </Typography>
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={chartData}
//                 margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="value" fill="#1976d2" />
//               </BarChart>
//             </ResponsiveContainer>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Dashboard;

import { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Box,
  Divider,
  LinearProgress,
  Avatar,
  Button
} from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

function Dashboard() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pieData, setPieData] = useState([]);
  
  const COLORS = ['#3a47d5', '#00d2ff', '#6a75e8', '#4bc0d9'];
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      // Load count data
      const savedCount = localStorage.getItem('count');
      if (savedCount) {
        setCount(parseInt(savedCount));
      }
      
      // Load user data
      const savedUserData = localStorage.getItem('userData');
      if (savedUserData) {
        setUserData(JSON.parse(savedUserData));
      } else {
        // Fallback mock data
        setUserData({
          id: 'USR-1234',
          name: 'Alex Johnson',
          email: 'alex@example.com',
          phone: '(555) 123-4567',
          address: '123 Main Street, New York, NY 10001',
          avatar: 'AJ'
        });
      }
      
      // Create mock chart data
      const countValue = savedCount ? parseInt(savedCount) : 0;
      const mockData = [
        { name: 'Profile Views', value: Math.floor(Math.random() * 100) + 20, fill: '#3a47d5' },
        { name: 'Form Submissions', value: Math.floor(Math.random() * 50) + 5, fill: '#00d2ff' },
        { name: 'Text Edits', value: Math.floor(Math.random() * 30) + 10, fill: '#6a75e8' },
        { name: 'Counter Clicks', value: countValue, fill: '#4bc0d9' }
      ];
      setChartData(mockData);
      
      // Create pie chart data
      const pieChartData = [
        { name: 'Profile', value: 35 },
        { name: 'Forms', value: 25 },
        { name: 'Editor', value: 20 },
        { name: 'Counter', value: 20 }
      ];
      setPieData(pieChartData);
      
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Custom tooltip component for the charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Paper
          elevation={3}
          sx={{
            p: 2,
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #f0f0f0',
            borderRadius: 1,
          }}
        >
          <Typography variant="subtitle2" color="primary">
            {label || payload[0].name}
          </Typography>
          <Typography variant="body2">
            Value: <strong>{payload[0].value}</strong>
          </Typography>
        </Paper>
      );
    }
    return null;
  };
  
  // Generate activity metrics
  const activityMetrics = [
    { label: 'Profile Completion', value: 85, color: '#3a47d5' },
    { label: 'Form Activity', value: 62, color: '#00d2ff' },
    { label: 'Content Creation', value: 47, color: '#6a75e8' }
  ];
  
  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
            Loading Dashboard...
          </Typography>
          <LinearProgress 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              background: 'rgba(58,71,213,0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
              }
            }} 
          />
        </Box>
      </Container>
    );
  }
  
  return (
    <>
      <Box sx={{ 
        pt: 5, 
        pb: 5, 
        background: 'linear-gradient(135deg, #3a47d5 0%, #00d2ff 100%)',
        color: 'white',
      }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DashboardIcon sx={{ fontSize: 40 }} />
            <Typography 
              variant="h3" 
              component="h1"
              fontWeight="bold"
              sx={{
                background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Analytics Dashboard
            </Typography>
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              mt: 1,
              opacity: 0.9,
              maxWidth: '800px'
            }}
          >
            Visualize your data and monitor performance metrics in real-time
          </Typography>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Grid container spacing={3}>
          {/* Counter Card */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: 240,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              },
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <TrendingUpIcon sx={{ color: '#3a47d5' }} />
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  Counter Activity
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <Typography 
                  variant="h2" 
                  component="div" 
                  fontWeight="bold"
                  sx={{ 
                    background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {count}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Total counter clicks recorded
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          {/* User Profile Card */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: 240,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              },
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <PersonIcon sx={{ color: '#3a47d5' }} />
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  User Profile
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              {userData ? (
                <Box sx={{ display: 'flex', gap: 3 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar 
                      sx={{ 
                        width: 80, 
                        height: 80, 
                        mb: 1,
                        background: 'linear-gradient(135deg, #3a47d5 0%, #00d2ff 100%)',
                        fontWeight: 'bold'
                      }}
                    >
                      {userData.avatar || userData.name.substring(0, 2).toUpperCase()}
                    </Avatar>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {userData.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      ID: {userData.id}
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>{userData.email}</Typography>
                        
                        <Typography variant="subtitle2" color="text.secondary">Phone</Typography>
                        <Typography variant="body2" fontWeight="medium">{userData.phone}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle2" color="text.secondary">Address</Typography>
                        <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>{userData.address}</Typography>
                        
                        <Button 
                          variant="outlined" 
                          size="small"
                          sx={{ 
                            mt: 2,
                            borderRadius: 2,
                            borderColor: '#3a47d5',
                            color: '#3a47d5',
                            '&:hover': {
                              borderColor: '#00d2ff',
                              background: 'rgba(0,210,255,0.05)'
                            }
                          }}
                        >
                          Edit Profile
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  height: '100%'
                }}>
                  <Typography color="text.secondary">No user data available</Typography>
                  <Button 
                    variant="contained"
                    sx={{ 
                      mt: 2,
                      borderRadius: 2,
                      background: 'linear-gradient(90deg, #3a47d5 0%, #00d2ff 100%)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #3a47d5 30%, #00d2ff 100%)',
                      }
                    }}
                  >
                    Create Profile
                  </Button>
                </Box>
              )}
            </Paper>
          </Grid>
          
          {/* Activity Metrics */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: 300,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              },
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AssessmentIcon sx={{ color: '#3a47d5' }} />
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  Activity Metrics
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ flexGrow: 1 }}>
                {activityMetrics.map((metric, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" fontWeight="medium">{metric.label}</Typography>
                      <Typography variant="body2" fontWeight="bold">{metric.value}%</Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={metric.value} 
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        background: 'rgba(0,0,0,0.05)',
                        '& .MuiLinearProgress-bar': {
                          background: metric.color,
                        }
                      }} 
                    />
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button 
                  variant="text"
                  sx={{ 
                    color: '#3a47d5',
                    '&:hover': {
                      background: 'rgba(58,71,213,0.05)'
                    }
                  }}
                >
                  View All Metrics
                </Button>
              </Box>
            </Paper>
          </Grid>
          
          {/* Pie Chart */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              minHeight: 300,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              },
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <AssessmentIcon sx={{ color: '#3a47d5' }} />
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  Usage Distribution
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />
              <Grid container sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={5}>
                  <Box sx={{ height: 220, mt: 2 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    justifyContent: 'center',
                    pl: { xs: 0, md: 4 },
                    mt: { xs: 3, md: 0 } 
                  }}>
                    <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
                      Feature Usage Breakdown
                    </Typography>
                    {pieData.map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box 
                          sx={{ 
                            width: 12, 
                            height: 12, 
                            borderRadius: '50%', 
                            bgcolor: COLORS[index % COLORS.length],
                            mr: 1
                          }} 
                        />
                        <Typography variant="body2" sx={{ flexGrow: 1 }}>{item.name}</Typography>
                        <Typography variant="body2" fontWeight="bold">{item.value}%</Typography>
                      </Box>
                    ))}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                      Based on user interaction data from the last 30 days
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          
          {/* Bar Chart */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column', 
              height: 400,
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              },
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <AssessmentIcon sx={{ color: '#3a47d5' }} />
                <Typography variant="h6" gutterBottom fontWeight="medium">
                  User Activity
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Comprehensive view of platform engagement metrics
              </Typography>
              <Box sx={{ flexGrow: 1, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 20, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      tickLine={{ stroke: '#e0e0e0' }}
                    />
                    <YAxis 
                      tick={{ fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      tickLine={{ stroke: '#e0e0e0' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ bottom: 0 }} />
                    <Bar 
                      dataKey="value" 
                      radius={[4, 4, 0, 0]}
                      barSize={60}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;