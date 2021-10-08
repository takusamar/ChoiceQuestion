import { ThemeProvider } from "@material-ui/core";
import React from "react";
import "./App.css";
import { ChoiceQuestionPage } from "./components/pages/ChoiceQuestionPage";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChoiceQuestionPage />
    </ThemeProvider>
  );
}

export default App;
