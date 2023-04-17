import { Slider, Stack } from "@mui/joy";
import { React, useState } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

export default function LoopSlider() {
  const [value, setValue] = useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Slider
        color="warning"
        value={value}
        onChange={handleChange}
        sx={{
          paddingBottom: "0px",
        }}
      />
      <AllInclusiveIcon
        sx={{
          color: "white",
        }}
      />
    </Stack>
  );
}
