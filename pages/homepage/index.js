import {
  Button, Slider, Stack, Typography,
} from "@mui/joy";
import { React, useState } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export default function Login() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack
      spacing={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3vh",
        height: "95vh",
        boxShadow: "0px 1px 3px 0px #888888",
        borderRadius: "6px",
        backgroundImage: "linear-gradient(to bottom right, #2c3e50, #34495e)",
        // filter: "blur(5px)",
      }}
    >
      <Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: "1.5vh",
          }}
        >
          <Typography
            level="h2"
            fontSize="xl"
            sx={{
              color: "white",
            }}
          >
            Song
          </Typography>
          <Typography
            level="body1"
            fontSize="md"
            sx={{
              color: "gray",
            }}
          >
            Artist
          </Typography>
        </Stack>
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
        <Stack width="30vh">
          <Stack
            spacing={1}
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
          <Stack
            spacing={1}
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
          <Stack
            spacing={1}
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Slider
              color="warning"
              value={value}
              onChange={handleChange}
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
        </Stack>
      </Stack>
    </Stack>
  );
}
