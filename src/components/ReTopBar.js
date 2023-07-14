"use client";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import ReInputSearch from "./ReInputSearch";

const ReTopBar = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={9}>
        <Typography variant="h6" color="blue" fontWeight={800}>
          COMPANY NAME
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent="flex-end"
        >
          <Grid item>
            <Paper
              elevation={0}
              sx={{
                border: 1,
                borderColor: "GrayText",
                py: 0.7,
                px: 2,
                mr: 2,
                borderRadius: 1,
              }}
            >
              <NotificationsNoneOutlined fontSize="small" />
            </Paper>
          </Grid>
          <ReInputSearch style={{ width: 200 }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReTopBar;
