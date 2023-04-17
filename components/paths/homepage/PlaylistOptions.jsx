/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconButton, Input, Stack } from "@mui/joy";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PlaylistOptions({ addSong }) {
  const [newSong, setNewSong] = useState();
  const handleAddSong = () => {
    addSong((prevSongs) => [...prevSongs, newSong]);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-around">
        <IconButton
          variant="solid"
          color="warning"
          onClick={() => handleAddSong()}
        >
          <AddIcon />
        </IconButton>
        <IconButton variant="solid" color="warning">
          <ListIcon />
        </IconButton>
        <IconButton variant="solid" color="warning">
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
      </Stack>
      <Input
        variant="soft"
        placeholder="[ Add song ]"
        onChange={(e) => setNewSong(e.target.value)}
      />
    </Stack>
  );
}
