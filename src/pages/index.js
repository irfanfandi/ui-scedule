import ReChartPie from "@/components/ReChartPie";
import ReChartSm from "@/components/ReChartSm";
import Layout from "@/sections/Layout";
import { Card, Grid, Paper, Typography } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <Typography variant="h6" color="blue" fontWeight={800}>
        COMPANY NAME
      </Typography>
      <Typography variant="h5" mt={6} fontWeight={700}>
        Welcome, John
      </Typography>
      <Typography variant="inherit" color={"inherit"}>
        You working at ABC Company
      </Typography>
      <Paper elevation={3} sx={{ py: 4, px: 2, mt: 4, borderRadius: 2 }}>
        <Typography variant="h5" fontWeight={700}>
          Company Overview
        </Typography>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          <Grid item xs={4}>
            <ReChartSm
              title="Total Employees"
              value="2,420"
              valueChange="425"
              isUp={true}
            />
            <ReChartSm
              title="Total Department"
              value="100"
              valueChange="50"
              isUp={false}
              style={{ mt: 4 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Card sx={{ p: 2, borderRadius: 2 }} elevation={1}>
              <Typography variant="inherit" color={"black"}>
                Diversity
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                mt={1}
              >
                <Grid item xs={6} py={2}>
                  <ReChartPie title="Gender" />
                </Grid>
                <Grid item xs={6} py={2}>
                  <ReChartPie title="Gender" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
}
