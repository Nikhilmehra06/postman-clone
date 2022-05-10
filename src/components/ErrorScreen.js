import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ErrorScreen = () => {
  const error = `https://i.stack.imgur.com/01tZQ.png`;
  return (
    <Box>
      <Typography mt={2} mb={2}>
        Response
      </Typography>
      <Box style={{ display: 'flex' }}>
        <img src={error} alt="error" className="errorImg" />
      </Box>
    </Box>
  );
};

export default ErrorScreen;
