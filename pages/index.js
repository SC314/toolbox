import { React, useEffect, useState } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import { useRouter } from "next/router";
import User from "@components/paths/login/User";
import Password from "@components/paths/login/Password";
import StaySignedIn from "@components/paths/login/StaySignedIn";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({});
  const loginRouter = useRouter();

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

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
            <User
              handleUser={setCredentials}
              disabled={loading}
            />
            <Password
              handlePassword={setCredentials}
              disabled={loading}
            />
            <StaySignedIn
              disabled={loading}
            />
            <Button
              loading={loading}
              variant="soft"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  loginRouter.push("/homepage");
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
