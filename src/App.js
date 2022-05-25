import { GroceryListContextProvider } from "./context/GroceryListContext";
import { InputBox } from "./components/InputBox";
import { GroceryList } from "./components/GroceryList";
import { AddItemButton } from "./components/AddItemButton";
import {
  Button,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";

import "./app.scss";
const theme = createTheme({
  typography: {
    fontFamily: `initial`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#696969",
    },
    primary: {
      main: "#9370DB",
    },
    secondary: {
      main: "#8B008B",
    },
  },
});
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GroceryListContextProvider>
          <div className="input-container">
            <InputBox />
            <AddItemButton />
          </div>
          <GroceryList />
        </GroceryListContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
