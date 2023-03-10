import { React } from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Stack from "@mui/joy/Stack";
import AppBar from "@components/common/AppBar";
import CreditCard from "@components/homepage/CreditCard";

export default function Login() {
  return (
    <CssVarsProvider>
      <main>
        <Stack
          sx={{
            minHeight: "100vh",
            backgroundColor: "#ebedf0",
            alignContent: "center",
          }}
        >
          <AppBar />
          <Stack
            padding="50px 5px 0px 5px"
            spacing={1}
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <CreditCard
              name="MasterCard"
              quota="$3000"
              expended="$16.51"
              daysUntilPayment="14"
            />
            <CreditCard
              name="Dinners Club"
              quota="$500"
              expended="$248.67"
              daysUntilPayment="4"
            />
          </Stack>
        </Stack>
      </main>
    </CssVarsProvider>
  );
}
