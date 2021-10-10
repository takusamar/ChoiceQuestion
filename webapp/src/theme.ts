import { createTheme } from "@material-ui/core/styles";

// 120 183 211 = #78B7D2
// 116 173 199 = #74ADC7
// 155 206 229 = #9BCEE5

export const theme = createTheme({
  palette: {
    primary: { main: "#3A5664", contrastText: "#FFFFFF" },
    secondary: { main: "#7DA7C3", contrastText: "#FFFFFF" },
    warning: { main: "#A4FF8F" },
    info: { main: "#8FFFA4" },
    error: { main: "#FF8FA4" },
    background: { default: "#F8F8FB" },
    text: { primary: "#454851", disabled: "#454851", secondary: "#454851" },
  },
  overrides: {
    MuiAppBar: {
      root: {
        "box-shadow": "none",
      },
    },
    MuiButton: {
      contained: {
        "box-shadow": "none",
        color: "white",
      },
    },
    MuiFab: {
      root: {
        "box-shadow": "none",
      },
    },
  },

  typography: {
    h1: {
      color: "#454851",
      fontSize: 40,
      fontWeight: "bold",
    },
    h2: {
      color: "#454851",
      fontSize: 32,
      fontWeight: "bold",
    },
    h3: {
      color: "#454851",
      fontSize: 24,
      fontWeight: "bold",
    },
    h4: {
      color: "#454851",
      fontSize: 20,
      fontWeight: "bold",
    },
    h5: {
      color: "#454851",
      fontSize: 16,
      fontWeight: "bold",
    },
    h6: {
      color: "#454851",
      fontSize: 16,
    },
    body1: {
      color: "#454851",
      fontSize: 12,
    },
    body2: {
      color: "#454851",
      fontSize: 10,
    },
    subtitle1: {
      color: "#BAC2DA",
      fontSize: 16,
      fontWeight: "bold",
    },
    subtitle2: {
      color: "#454851",
      fontSize: 12,
      fontWeight: "bold",
    },
    button: {
      color: "#FFFFFF",
      fontSize: 12,
    },
    caption: {
      color: "#FF8FA4",
      fontSize: 14,
    },
  },
});
