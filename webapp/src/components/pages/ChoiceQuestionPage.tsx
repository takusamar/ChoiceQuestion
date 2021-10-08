import React, { useState } from "react";

import { Box, Typography } from "@material-ui/core";
import { OperateButton } from "../atoms/OperateButton";

import data from "../../data.json";
import { TQuestion } from "../../models/TQuestion";
import { QuestionBox } from "../organisms/QuestionBox";
import { SelectAnswer } from "../organisms/SelectAnswer";
import { ShowAnswer } from "../organisms/ShowAnswer";

export const ChoiceQuestionPage = () => {
  const title = data.title;
  const questions = (data.questions as TQuestion[]).flatMap((q) =>
    q.no > 0 ? q : []
  );

  const [question, setQuestion] = useState<TQuestion>();
  const [yourAnswer, setYourAnswer] = useState<string | undefined>();

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const showNextQuestion = () => {
    setYourAnswer(undefined);
    const index = getRandom(0, questions.length);
    setQuestion(questions[index]);
  };

  return (
    <Box m={1}>
      <Typography variant="body2">{title}</Typography>
      {question && (
        <>
          <QuestionBox question={question} />
          <SelectAnswer
            question={question}
            answered={!!yourAnswer}
            setValue={setYourAnswer}
          />
          {yourAnswer && (
            <ShowAnswer
              correctAnswer={question?.answer}
              yourAnswer={yourAnswer}
            />
          )}
        </>
      )}
      {(!question || yourAnswer) && (
        <OperateButton label="問題表示" onClick={showNextQuestion} />
      )}
    </Box>
  );
};
