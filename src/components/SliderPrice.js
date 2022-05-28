import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function SliderPrice(props) {
    const [value, setValue] = useState(0);

  const changeValue = (event, value) => {
    setValue(value);
    props.onChange(value);
  };
  const getText = (value) => `${value}`;
  return (
    <Box width={300}>
      <Typography id="discrete-slider" gutterBottom>
        Price
      </Typography>
      <Slider 
    //   value={value}
      aria-label="Default" 
      valueLabelDisplay="auto" 
      min={0}
      max={value}
      getAriaValueText={getText}
      onChange={changeValue}
      />
    </Box>
  );
}