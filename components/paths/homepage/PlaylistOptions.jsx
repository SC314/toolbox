/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconButton, Input, Stack } from "@mui/joy";
import { React, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Grow, Paper } from "@mui/material";

export default function PlaylistOptions({ addSong }) {
  const [newSong, setNewSong] = useState();
  const [newArtist, setNewArtist] = useState();
  const [newSongName, setNewSongName] = useState();
  const [songInput, setSongInput] = useState(!false);

  const handleAddSong = () => {
    setSongInput(!songInput);
    // const newEntry = {
    //   url: newSong,
    //   name: newSongName,
    //   artist: newArtist,
    // };

    // addSong((prevSongs) => [...prevSongs, newEntry]);
  };
  const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );

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
      <Grow
        in={songInput}
        timeout={300}
        enter
        exit={!songInput}
        mountOnEnter
        unmountOnExit
      >
        <Stack spacing={1}>
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
          <IconButton variant="solid" color="warning">
            <CheckIcon />
          </IconButton>
        </Stack>
      </Grow>
    </Stack>
  );
}
