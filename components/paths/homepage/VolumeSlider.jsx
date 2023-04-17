import { Stack } from "@mui/joy";
import { React } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Slider from "@mui/material/Slider";

// eslint-disable-next-line react/prop-types
export default function VolumeSlider({ volume, handleVolumeChange }) {
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
        value={volume}
        min={0}
        valueLabelDisplay="auto"
        max={1}
        step={0.01}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
        sx={{
          color: "#980eed",
        }}
      />
      <VolumeUpIcon sx={{
        color: "white",
      }}
      />
    </Stack>
  );
}
