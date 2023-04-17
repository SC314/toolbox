import { IconButton, Stack } from "@mui/joy";
import { React } from "react";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PlaylistOptions() {
  return (
    <Stack direction="row" justifyContent="space-around">
      <IconButton variant="solid" color="warning">
        <AddIcon />
      </IconButton>
      <IconButton variant="solid" color="warning">
        <ListIcon />
      </IconButton>
      <IconButton variant="solid" color="warning">
        <FavoriteIcon sx={{ color: "red" }} />
      </IconButton>
    </Stack>
  );
}
