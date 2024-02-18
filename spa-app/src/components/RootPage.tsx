import { CssBaseline, CssVarsProvider, extendTheme } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const theme = extendTheme({
  fontFamily: {
    display: "Caudex",
  },
  typography: {},
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#efebe9",
          "100": "#d7ccc8",
          "200": "#bcaaa4",
          "300": "#a1887f",
          "400": "#8d6e63",
          "500": "#795548",
          "600": "#6d4c41",
          "700": "#5d4037",
          "800": "#4e342e",
          "900": "#3e2723",
        },
        neutral: {
          "50": "#fafaf9",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#78716c",
          "600": "#57534e",
          "700": "#44403c",
          "800": "#292524",
          "900": "#1c1917",
        },
      },
    },
  },
});

const RootPage = () => {
  return (
    <HelmetProvider>
      <CssVarsProvider theme={theme} defaultMode={"light"}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </CssVarsProvider>
    </HelmetProvider>
  );
};

export default RootPage;
