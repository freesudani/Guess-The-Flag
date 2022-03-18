import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#8a2b06" },
  },
  breakpoints: {
    values: {
      mobile: 260,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const StyleProvider = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default StyleProvider;
