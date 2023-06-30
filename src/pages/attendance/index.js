import ReInputSearch from "@/components/ReInputSearch";
import ReChartSm from "@/components/dashboard/ReChartSm";
import ReTableAttend from "@/components/dashboard/ReTableAttend";
import Layout from "@/sections/Layout";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Card, Grid, Paper, Typography } from "@mui/material";

export default function Attendance() {
  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9}>
          <Typography variant="h6" color="blue" fontWeight={800}>
            COMPANY NAME
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          xs={3}
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
      <Typography variant="h5" mt={6} fontWeight={700}>
        Welcome, John
      </Typography>
      <Typography variant="inherit" color={"inherit"}>
        You working at ABC Company
      </Typography>
      <Grid
        mt={4}
        container
        direction={"row"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={4}>
          <ReChartSm
            title="Present Employees"
            value="2,420"
            valueChange="425"
            isUp={true}
          />
        </Grid>
        <Grid item xs={4}>
          <ReChartSm
            title="Late Employees"
            value="1,420"
            valueChange="200"
            isUp={false}
          />
        </Grid>
        <Grid item xs={4}>
          <ReChartSm
            title="Employees on Leaves"
            value="2,420"
            valueChange="10"
            isUp={true}
          />
        </Grid>
      </Grid>
      <Grid mt={4} mb={8} container>
        <Card sx={{ py: 2, width: "100%", borderRadius: 2 }} elevation={1}>
          <ReTableAttend />
        </Card>
      </Grid>
    </Layout>
  );
}
