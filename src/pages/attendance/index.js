import ReTopBar from "@/components/ReTopBar";
import ReChartSm from "@/components/dashboard/ReChartSm";
import ReTableAttend from "@/components/dashboard/ReTableAttend";
import Layout from "@/sections/Layout";
import { Card, Grid, Typography } from "@mui/material";

export default function Attendance() {
  return (
    <Layout>
      <ReTopBar />
      <Grid pt={6}>
        <Typography variant="h5" fontWeight={700}>
          Welcome, John
        </Typography>
        <Typography variant="inherit">You working at ABC Company</Typography>
      </Grid>
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
