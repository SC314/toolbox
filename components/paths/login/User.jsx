import {
  CssVarsProvider,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { React } from "react";
import PropTypes from "prop-types";

export default function User({ disabled, handleUser }) {
  return (
    <CssVarsProvider>
      <main>
        <FormControl>
          <FormLabel>
            User
          </FormLabel>
          <Input
            disabled={disabled}
            placeholder="[ ... ]"
            onChange={(e) => {
              handleUser((credentials) => ({
                ...credentials,
                user: e.target.value,
              }));
            }}
          />

        </FormControl>
      </main>
    </CssVarsProvider>

  );
}

User.propTypes = {
  disabled: PropTypes.bool,
  handleUser: PropTypes.func,
};

User.defaultProps = {
  disabled: false,
  handleUser: () => null,
};
