import { Button, Stack } from "@mui/joy";
import { React } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function MusicCotrolls() {
  return (
    <Stack
      direction="row"
      spacing={0.5}
      mb="2vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        color="success"
      >
        <SkipPreviousIcon />
      </Button>
      <Button
        variant="outlined"
        color="success"
      >
        <PlayArrowIcon />
      </Button>
      <Button
        variant="outlined"
        color="success"
      >
        <SkipNextIcon />
      </Button>
    </Stack>
  );
}
