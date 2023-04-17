/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack, Tooltip } from "@mui/joy";
import { React, useState } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Slider from "@mui/material/Slider";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  if (Number.isNaN(value)) {
    return null;
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}>
      {children}
    </Tooltip>
  );
}

export default function LoopSlider({ loopStart, loopEnd, duration, handleLoopChange }) {
  const handleChange = (event, newValue) => {
    handleLoopChange(newValue);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        color="warning"
        value={[loopStart, loopEnd]}
        min={0}
        max={duration}
        onChange={handleChange}
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        step={0.001}
        valueLabelDisplay="auto"
        aria-labelledby="loop-slider"
        sx={{
          paddingBottom: "0px",
        }}
      />
      <AllInclusiveIcon
        sx={{
          color: "white",
        }}
      />
    </Stack>
  );
}
