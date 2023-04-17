import { Stack, Typography } from "@mui/joy";
import { React } from "react";

export default function SongInfo() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
  );
}
