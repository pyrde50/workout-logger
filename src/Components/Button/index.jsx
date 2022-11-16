import * as React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ width, text, height, onClick, color, disabled }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      style={{ width: width, height: height, backgroundColor: color }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
