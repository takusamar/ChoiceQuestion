import { Box, Typography } from "@material-ui/core";
import React from "react";
import { SpaceDivider } from "../atoms/SpaceDivider";

interface OwnProps {
  correctAnswer: string;
  yourAnswer: string;
}

export const ShowAnswer: React.FC<OwnProps> = ({
  correctAnswer,
  yourAnswer,
}) => {
  return (
    <Box m={1}>
      <SpaceDivider />
      <Box mt={1} />
      {correctAnswer === yourAnswer ? (
        <Typography variant="body1" color="primary">
          正解！
        </Typography>
      ) : (
        <Typography variant="body1" color="error">
          間違い！！
        </Typography>
      )}
      <Box mt={1} />
      <Typography variant="body1">正解は、 {correctAnswer}</Typography>
    </Box>
  );
};
