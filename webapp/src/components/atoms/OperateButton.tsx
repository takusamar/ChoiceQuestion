import { Box, Button } from "@material-ui/core";
import React from "react";

interface OwnProps {
  label: string;
  onClick(): void;
  disabled?: boolean | false;
}
export const OperateButton: React.FC<OwnProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <Box m={1}>
      <Button
        disabled={disabled}
        variant="contained"
        color="secondary"
        onClick={onClick}
      >
        {label}
      </Button>
    </Box>
  );
};
