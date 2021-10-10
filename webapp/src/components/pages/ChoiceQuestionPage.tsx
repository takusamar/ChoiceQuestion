import React, { useState } from "react";

import { Box, Typography } from "@material-ui/core";
import { OperateButton } from "../atoms/OperateButton";

import data from "../../data.json";
import { TQuestion } from "../../models/TQuestion";
import { QuestionBox } from "../organisms/QuestionBox";
import { SelectAnswer } from "../organisms/SelectAnswer";
import { ShowAnswer } from "../organisms/ShowAnswer";
import { shuffle } from "../../utils";

export const ChoiceQuestionPage = () => {
  const title = data.title;
  const questions = (data.questions as TQuestion[]).flatMap((q) =>
    q.no > 0 ? q : []
  );

  const [orders, setOrders] = useState<number[]>([]);
  const [question, setQuestion] = useState<TQuestion>();
  const [yourAnswer, setYourAnswer] = useState<string | undefined>();

  const showNextQuestion = () => {
    setYourAnswer(undefined);
    const newOrders =
      orders.length > 0
        ? orders
        : shuffle([...Array(questions.length)].map((_, i) => i));
    const order = newOrders[0];
    setQuestion(questions[order]);
    setOrders(newOrders.slice(1));
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
