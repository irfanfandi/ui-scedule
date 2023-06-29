import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let ThemeStyles = createTheme({
  palette: {
    primary: {
      main: "#0000FF",
    },
    secondary: {
      main: "#4d5168",
    },
    error: {
      main: "#B00020",
    },
    warning: {
      main: "#E2CF21",
    },
    success: {
      main: "#49a91d",
    },
  },

  typography: {
    fontFamily: ["Poppins"].join(","),
    allVariants: {
      textTransform: "none",
    },
  },
  spacing: 8,
  maxHeightPageContainer: "calc(100vh - 120px)",
  drawerRigthWidth: 400,
});

ThemeStyles = responsiveFontSizes(ThemeStyles);

export default ThemeStyles;
