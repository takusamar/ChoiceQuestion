import { Box, Typography } from "@material-ui/core";
import React from "react";
import { TQuestion } from "../../models/TQuestion";

interface OwnProps {
  question: TQuestion;
}

export const QuestionBox: React.FC<OwnProps> = ({ question }) => {
  return (
    <Box m={1}>
      <Typography variant="subtitle2">{question.description}</Typography>
      <Box mt={1} display="flex">
        <Typography variant="body1">{question.no}.</Typography>
        <Box ml={1} />
        <Typography variant="body1">{question.question}</Typography>
      </Box>
      {question.notes && (
        <Box m={1}>
          {question.notes.map((note, idx) => (
            <Typography key={idx} variant="body1">
              {note}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};
