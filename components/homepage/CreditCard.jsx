import { Divider, Stack, Typography } from "@mui/joy";
import { React } from "react";
import PropTypes from "prop-types";

export default function CreditCard({
  name, expended, daysUntilPayment, quota,
}) {
  return (
    <Stack
      sx={{
        borderRadius: "sm",
        maxWidth: "300px",
        minWidth: "300px",
        boxShadow: "var(--shadow)",
        backgroundColor: "white",
        padding: "10px",
      }}
      spacing={1}
    >
      <Typography
        level="h5"
        sx={{
          color: "#054da7",
        }}
      >
        {name}
      </Typography>
      <Divider />
      <Stack direction="row" spacing={0.5}>
        <Typography
          level="subtitle1"
          sx={{
            color: "#054da7",
          }}
        >
          Quota:
        </Typography>
        <Typography
          level="subtitle1"
        >
          {quota}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={0.5}>
        <Typography
          level="subtitle1"
          sx={{
            color: "#054da7",
          }}
        >
          Expended:
        </Typography>
        <Typography
          level="subtitle1"
        >
          {expended}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={0.5}>
        <Typography
          level="subtitle1"
          sx={{
            color: "#054da7",
          }}
        >
          Days until payment:
        </Typography>
        <Typography
          level="subtitle1"
        >
          {daysUntilPayment}
        </Typography>
      </Stack>
    </Stack>
  );
}

CreditCard.propTypes = {
  name: PropTypes.string,
  expended: PropTypes.string,
  daysUntilPayment: PropTypes.string,
  quota: PropTypes.string,
};

CreditCard.defaultProps = {
  name: "Credit Card",
  expended: "0",
  daysUntilPayment: "0",
  quota: "0",
};
