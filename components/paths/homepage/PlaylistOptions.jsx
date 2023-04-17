import { Stack } from "@mui/joy";
import { React } from "react";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PlaylistOptions() {
  return (
    <Stack direction="row" justifyContent="space-around">
      <AddIcon
        sx={{
          color: "white",
        }}
      />
      <ListIcon
        sx={{
          color: "white",
        }}
      />
      <FavoriteIcon
        sx={{
          color: "red",
        }}
      />
    </Stack>
  );
}
