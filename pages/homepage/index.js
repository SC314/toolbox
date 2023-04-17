import {
  Stack,
} from "@mui/joy";
import { React } from "react";
import SongInfo from "@components/paths/homepage/SongInfo";
import MusicCotrolls from "@components/paths/homepage/MusicControlls";
import TimeSlider from "@components/paths/homepage/TimeSlider";
import VolumeSlider from "@components/paths/homepage/VolumeSlider";
import LoopSlider from "@components/paths/homepage/LoopSlider";
import PlaylistOptions from "@components/paths/homepage/PlaylistOptions";

export default function Login() {
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
      <Stack spacing={2}>
        <SongInfo />
        <MusicCotrolls />
        <Stack width="30vh">
          <TimeSlider />
          <VolumeSlider />
          <LoopSlider />
        </Stack>
        <PlaylistOptions />
      </Stack>
    </Stack>
  );
}
