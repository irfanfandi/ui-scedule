import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Grid
        component="main"
        sx={{
          width: "100%",
          backgroundColor: "black",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Grid
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            mt: 2,
            backgroundColor: "white",
            p: 3,
            borderTopLeftRadius: 30,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
