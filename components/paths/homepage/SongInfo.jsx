/* eslint-disable object-curly-spacing */
import { Stack, Typography } from "@mui/joy";
import { React } from "react";

// eslint-disable-next-line react/prop-types
export default function SongInfo({index, songs, song}) {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        level="body3"
        fontSize="xl"
        sx={{
          color: "gray",
        }}
      >
        {`${index}/${songs}`}
      </Typography>
      <Typography
        level="h2"
        fontSize="xl"
        sx={{
          color: "white",
        }}
      >
        {song.name}
      </Typography>
      <Typography
        level="body1"
        fontSize="md"
        sx={{
          color: "gray",
        }}
      >
        {song.artist}
      </Typography>
    </Stack>
  );
}
