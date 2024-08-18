import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


const defaultData = {
  label: 'Default Risk Level',
  value: 50,
  min: 0,
  max: 100,
  step: 10,
};

const RangeScale = ({ data = defaultData }) => {
  return (
    <div style={{ width: 300, padding: '0 30px' }}>
      <Typography variant="h6" gutterBottom>
        {data.label}
      </Typography>
      <Slider
        value={data.value}
        min={data.min}
        max={data.max}
        step={data.step}
        marks
        valueLabelDisplay="auto"
        disabled
      />
    </div>
  );
};

export default RangeScale;
