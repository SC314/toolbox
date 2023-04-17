import React from "react";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  if (isNaN(value)) {
    return <></>;
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}>
      {children}
    </Tooltip>
  );
}

function AudioSlider({ currentTime, duration, handleSliderChange }) {
  if (isNaN(currentTime) || isNaN(duration)) {
    return null;
  }

  return (
    <Slider
      value={currentTime}
      max={duration}
      onChange={handleSliderChange}
      valueLabelDisplay="auto"
      components={{
        ValueLabel: ValueLabelComponent,
      }}
    />
  );
}

export default AudioSlider;
