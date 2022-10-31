import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomDropdownPicker = ({ value, setValue, items }) => {
  console.log(items, 'vittu32');
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={setValue}
      >
        {items.map((item) => (
          <MenuItem value={item.value} key={item.id}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomDropdownPicker;
