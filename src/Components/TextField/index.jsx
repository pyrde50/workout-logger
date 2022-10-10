import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ disabled, value, width }) => {
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
          style={{ width: width }}
        />
      ) : (
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          style={{ width: width }}
        />
      )}
    </Box>
  );
};

export default CustomTextField;
