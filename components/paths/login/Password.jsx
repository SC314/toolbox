import {
  CssVarsProvider,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { React } from "react";
import PropTypes from "prop-types";

export default function User({ disabled, handlePassword }) {
  return (
    <CssVarsProvider>
      <main>
        <FormControl>
          <FormLabel>
            Password
          </FormLabel>
          <Input
            type="password"
            placeholder="[ ... ]"
            disabled={disabled}
            onChange={(e) => {
              handlePassword((credentials) => ({
                ...credentials,
                password: e.target.value,
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
  handlePassword: PropTypes.func,
};

User.defaultProps = {
  disabled: false,
  handlePassword: () => null,
};
