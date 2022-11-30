import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { RangeSliderPropsType } from '../../types/RangeSliderPropsType';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({ min, max }: RangeSliderPropsType) {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 200, marginTop: 2 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
