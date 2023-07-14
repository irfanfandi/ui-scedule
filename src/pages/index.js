import ReChartAttendLine from "@/components/dashboard/ReChartAttendLine";
import ReChartAttendUserStatic from "@/components/dashboard/ReChartAttendUserStatic";
import ReChartAttendWeek from "@/components/dashboard/ReChartAttendWeek";
import ReChartLeaveLine from "@/components/dashboard/ReChartLeaveLine";
import ReChartLeaveWeek from "@/components/dashboard/ReChartLeaveWeek";
import ReChartPie from "@/components/dashboard/ReChartPie";
import ReChartSm from "@/components/dashboard/ReChartSm";
import ReTableDashboard from "@/components/dashboard/ReTableDashboard";
import ReTopBar from "@/components/ReTopBar";
import Layout from "@/sections/Layout";
import { AddTaskOutlined } from "@mui/icons-material";
import { Card, Divider, Grid, Paper, Typography } from "@mui/material";

export default function Index() {
  return (
    <Layout>
      <ReTopBar />
      <Typography variant="h5" mt={6} fontWeight={700}>
        Welcome, John
      </Typography>
      <Typography variant="inherit" color={"inherit"}>
        You working at ABC Company
      </Typography>
      {/* Company Overview */}
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
                  <ReChartPie
                    title="Gender"
                    backgroundColor={["rgb(255, 99, 132)", "rgb(54, 162, 235)"]}
                    labels={["Male", "Female"]}
                  />
                </Grid>
                <Grid item xs={6} py={2}>
                  <ReChartPie
                    title="Status"
                    backgroundColor={["rgb(54, 162, 235)", "rgb(138,43,226)"]}
                    labels={["Married", "Not Married"]}
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      {/* Attendance Report */}
      <Paper elevation={3} sx={{ py: 4, px: 2, mt: 4, borderRadius: 2 }}>
        <Grid container direction={"row"}>
          <AddTaskOutlined sx={{ mr: 2 }} />
          <Typography variant="inherit">Attendance Report</Typography>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          <Grid item xs={6}>
            <ReChartAttendWeek value="2,420" valueChange="425" isUp={true} />
            <ReChartAttendLine style={{ mt: 4 }} />
          </Grid>
          <Divider
            sx={{ ml: 4, mr: 2 }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Grid item xs={5}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              mt={1}
            >
              <ReChartAttendUserStatic />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* Leave Report */}
      <Paper elevation={3} sx={{ py: 4, px: 2, mt: 4, borderRadius: 2 }}>
        <Grid container direction={"row"}>
          <AddTaskOutlined sx={{ mr: 2 }} />
          <Typography variant="inherit">Leave Report</Typography>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          <Grid item xs={6}>
            <ReChartLeaveWeek value="2,420" valueChange="425" isUp={true} />
            <ReChartLeaveLine style={{ mt: 4 }} />
          </Grid>
          <Divider
            sx={{ ml: 4, mr: 2 }}
            orientation="vertical"
            flexItem
          ></Divider>
          <Grid item xs={5}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              mt={1}
            >
              <ReTableDashboard />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
}
