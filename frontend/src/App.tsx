import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./router";
import theme from "./styles/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
