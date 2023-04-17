import { Button, Stack } from "@mui/joy";
import { React } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function MusicCotrolls({ pause, handlePlayPause }) {
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
        onClick={() => handlePlayPause()}
      >
        {pause ? (
          <PlayArrowIcon />
        ) : (
          <PauseIcon />
        )}
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
