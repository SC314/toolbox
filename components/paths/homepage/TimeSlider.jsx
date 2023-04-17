import { Slider, Stack } from "@mui/joy";
import { React } from "react";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

export default function TimeSlider() {
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
        color="success"
        valueLabelDisplay="off"
        sx={{
          paddingBottom: "0",
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
