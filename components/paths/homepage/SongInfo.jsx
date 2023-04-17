/* eslint-disable object-curly-spacing */
import { Stack, Typography } from "@mui/joy";
import { React } from "react";

// eslint-disable-next-line react/prop-types
export default function SongInfo({index, songs}) {
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
