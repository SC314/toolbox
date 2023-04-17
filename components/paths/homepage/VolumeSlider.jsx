import { Slider, Stack } from "@mui/joy";
import { React } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function VolumeSlider() {
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
        color="info"
      />
      <VolumeUpIcon sx={{
        color: "white",
      }}
      />
    </Stack>
  );
}
