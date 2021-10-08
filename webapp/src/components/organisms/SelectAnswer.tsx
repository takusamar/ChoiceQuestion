import React, { useEffect, useState } from "react";
import { TQuestion } from "../../models/TQuestion";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { OperateButton } from "../atoms/OperateButton";

interface OwnProps {
  question: TQuestion;
  answered: boolean;
  setValue(value: string): void;
}

export const SelectAnswer: React.FC<OwnProps> = ({
  question,
  answered,
  setValue,
}) => {
  const [options, setOptions] = useState<string[]>();
  const [selected, setSelected] = useState<string>("");

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const submitAnswer = () => {
    if (selected) {
      setValue(selected);
    }
  };

  useEffect(() => {
    setSelected("");
    if (question) {
      const newOptions = shuffle([...question.wrongs, question.answer]);
      setOptions(newOptions);
    }
  }, [question]);

  return (
    <Box m={1}>
      <FormControl>
        <RadioGroup name="options" value={selected} onChange={handleChange}>
          {options &&
            options.map((option, idx) => {
              return (
                <Box key={idx} mt={1}>
                  <FormControlLabel
                    disabled={answered}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                </Box>
              );
            })}
        </RadioGroup>
      </FormControl>
      {!answered && (
        <OperateButton
          label="回答送信"
          onClick={submitAnswer}
          disabled={!selected}
        />
      )}
    </Box>
  );
};
