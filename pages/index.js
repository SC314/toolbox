import { React, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { FormControl } from "@mui/joy";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";
import Checkbox from "@mui/joy/Checkbox";

export default function Login() {
  const [loading, setLoading] = useState(false);
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
            spacing={2}
            variant="outlined"
          >
            <FormControl>
              <FormLabel>
                User
              </FormLabel>
              <Input
                name="email"
                type="email"
                disabled={loading}
                placeholder="[ ... ]"
              />

            </FormControl>
            <FormControl>
              <FormLabel>
                Password
              </FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="[ ... ]"
                disabled={loading}
              />
            </FormControl>
            <Checkbox
              label="Stay signed in"
              disabled={loading}
            />
            <Button
              loading={loading}
              variant="soft"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                }, 1000);
              }}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </main>
    </CssVarsProvider>
  );
}
