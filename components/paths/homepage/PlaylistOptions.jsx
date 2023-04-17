/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconButton, Input, Stack } from "@mui/joy";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PlaylistOptions({ addSong }) {
  const [newSong, setNewSong] = useState();
  const [newArtist, setNewArtist] = useState();
  const [newSongName, setNewSongName] = useState();

  const handleAddSong = () => {
    const newEntry = {
      url: newSong,
      name: newSongName,
      artist: newArtist,
    };

    addSong((prevSongs) => [...prevSongs, newEntry]);
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
      <Input
        variant="soft"
        placeholder="[ Song Name ]"
        onChange={(e) => setNewSongName(e.target.value)}
      />
      <Input
        variant="soft"
        placeholder="[ Artist ]"
        onChange={(e) => setNewArtist(e.target.value)}
      />
    </Stack>
  );
}
