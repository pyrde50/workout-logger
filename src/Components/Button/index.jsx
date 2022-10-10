import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ width, text, height, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      style={{ width: width, height: height }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
