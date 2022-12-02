import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { RangeSliderPropsType } from '../../types/RangeSliderPropsType';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({
  min,
  max,
  filteredMinPrice,
  setFilteredMinPrice,
  filteredMaxPrice,
  setFilteredMaxPrice,
}: RangeSliderPropsType) {
  const [value, setValue] = useState<number[]>([min, max]);

  const handleChange = (event: any, newValue: number | number[]) => {
    //console.log(event.target.value);
    setValue(newValue as number[]);
    setFilteredMinPrice(event.target.value[0]);
    setFilteredMaxPrice(event.target.value[1]);
  };

  return (
    <Box sx={{ minWidth: 150, marginTop: 2 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={[filteredMinPrice, filteredMaxPrice]}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
