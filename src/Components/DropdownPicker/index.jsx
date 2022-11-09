import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CustomDropdownPicker = ({
  value,
  setValue,
  items,
  index,
  backgroundColor,
  width,
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: width, minWidth: '16ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={(event) => setValue(index, event.target.value)}
        style={{ backgroundColor: backgroundColor }}
      >
        {items.map((item) => (
          <MenuItem value={item.id} key={item.id}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomDropdownPicker;
