import { Box, Grid } from "@mui/material";
import { Suspense } from "react";
import Loading from "./Loading";
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
          style={{
            flexGrow: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            overflow: "auto",
            height: "100vh",
          }}
          mt={2}
          p={3}
        >
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
