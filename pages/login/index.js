import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { FormControl } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";

export default function App() {
  return (
    <CssVarsProvider>
      <main>
        <Stack
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ebedf0",
          }}
        >
          <Stack
            sx={{
              borderRadius: "sm",
              padding: 5,
              width: "100%",
              maxWidth: "300px",
              boxShadow: "var(--shadow)",
              backgroundColor: "white",
            }}
            variant="outlined"
          >
            <FormControl>
              <FormLabel>
                User
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="[ ... ]"
              />

            </FormControl>
            <FormControl>
              <FormLabel>
                Password
              </FormLabel>
              <Input name="password" type="password" placeholder="[ ... ]" />

            </FormControl>
            <Button
              variant="soft"
              sx={{ mt: 1.5 }}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </main>
    </CssVarsProvider>
  );
}
