import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline, createTheme } from "@mui/material";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/store";


const theme = createTheme({
  palette: {
    primary: { main: "rgb(0, 0, 0)" },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
      <App />
      </Provider>

    </ThemeProvider>
  </React.StrictMode>
);
