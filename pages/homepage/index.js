import { React } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Stack from "@mui/joy/Stack";

export default function Login() {
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
          />
        </Stack>
      </main>
    </CssVarsProvider>
  );
}
