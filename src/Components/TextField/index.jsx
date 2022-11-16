import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomTextField = ({
  disabled,
  value,
  width,
  height,
  onChange,
  backgroundColor,
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {disabled ? (
        <TextField
          id="outlined-basic"
          variant="outlined"
          disabled
          value={value}
          style={{ width: width, backgroundColor: backgroundColor }}
        />
      ) : (
        <TextField
          id="outlined-basic"
          variant="outlined"
          size={height === 'small' ? 'small' : undefined}
          style={{ width: width, backgroundColor: backgroundColor }}
          value={value}
          onChange={() => onChange(event.target.value)}
        />
      )}
    </Box>
  );
};

export default CustomTextField;
