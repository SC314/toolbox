import { Checkbox } from "@mui/joy";
import { React } from "react";
import PropTypes from "prop-types";

export default function StaySignedIn({ disabled }) {
  return (
    <Checkbox
      label="Stay signed in"
      disabled={disabled}
    />
  );
}

StaySignedIn.propTypes = {
  disabled: PropTypes.bool,
};

StaySignedIn.defaultProps = {
  disabled: false,
};
