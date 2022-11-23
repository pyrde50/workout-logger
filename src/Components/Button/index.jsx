import * as React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const CustomButton = ({ width, text, height, onClick, color, disabled }) => {
  const { t } = useTranslation();

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      style={{ width: width, height: height, backgroundColor: color }}
    >
      {t(text)}
    </Button>
  );
};

export default CustomButton;
