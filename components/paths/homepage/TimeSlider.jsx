/* eslint-disable react/prop-types */
import { Stack, Tooltip } from "@mui/joy";
import { React } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
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

export default function TimeSlider({
  currentTime, duration, handleSliderChange,
}) {
  if (Number.isNaN(currentTime) || Number.isNaN(duration)) {
    return null;
  }
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
        value={currentTime}
        max={duration}
        onChange={handleSliderChange}
        sx={{
          color: "green",
        }}
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
      />
      <LibraryMusicIcon
        sx={{
          color: "white",
        }}
      />
    </Stack>
  );
}
