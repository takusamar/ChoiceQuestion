import { Box, Divider } from "@material-ui/core";
import React from "react";

export const SpaceDivider: React.FC = () => {
  return (
    <Box my={1}>
      <Divider variant="middle" />
    </Box>
  );
};

export const VerticalDivider: React.FC = () => {
  return (
    <Box mx={1}>
      <Divider variant="middle" orientation="vertical" />
    </Box>
  );
};
