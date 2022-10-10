import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ width, text, height }) => {
  return (
    <Button variant="contained" style={{ width: width, height: height }}>
      {text}
    </Button>
  );
};

export default CustomButton;
