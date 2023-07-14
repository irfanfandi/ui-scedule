import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Grid
        style={{
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Grid
          style={{}}
          sx={{
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            overflow: "auto",
            height: "100vh",
          }}
          mt={2}
          p={3}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
