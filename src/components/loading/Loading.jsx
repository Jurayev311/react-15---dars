import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4CAF50" />  
            <stop offset="50%" stopColor="#1CB5E0" />  
            <stop offset="100%" stopColor="#e01cd5" /> 
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        thickness={3} 
        size={70}
        sx={{
          'svg circle': { stroke: 'url(#my_gradient)' },
          width: 200,
          height: 200, 
        }}
      />
    </React.Fragment>
  );
}

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #111827, #000000)', 
      }}
    >
      <GradientCircularProgress />
    </Box>
  );
};

export default Loading;