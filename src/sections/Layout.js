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
          overflow: "auto",
        }}
      >
        <Grid
          component="main"
          sx={{
            flexGrow: 1,
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
