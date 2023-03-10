import { Stack, Typography } from "@mui/joy";
import { React } from "react";

export default function AppBar() {
  return (
    <Stack
      sx={{
        borderRadius: "0 0 5px 5px",
        width: "100%",
        boxShadow: "var(--shadow)",
        position: "fixed",
        top: "20 px",
        height: "42px",
        zIndex: 999,
        backgroundColor: "#ddf1ff",
      }}
      spacing={2}
    >
      <Typography
        level="h5"
        sx={{
          color: "#054da7",
          paddingTop: "5px",
          paddingLeft: "10px",
        }}
      >
        My Cards
      </Typography>
    </Stack>
  );
}
