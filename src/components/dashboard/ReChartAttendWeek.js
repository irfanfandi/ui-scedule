import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
  },
};

const labels = ["Mo", "Tu", "We", "Th", "Fy", "Sa", "Su"];

export const data = {
  labels,
  datasets: [
    {
      data: [100, 300, 200, 50, 400, 300, 400],
      backgroundColor: "rgb(183, 153, 255)",
      borderRadius: 10,
    },
  ],
};

const ReChartAttendWeek = ({ title, value, style = {}, valueChange, isUp }) => {
  return (
    <Grid sx={{ p: 2, borderRadius: 2, ...style }} elevation={1}>
      <Grid container alignItems={"flex-end"}>
        <Grid item xs={5}>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            {value}
          </Typography>
          {isUp ? (
            <Grid
              container
              alignItems={"center"}
              justifyItems={"center"}
              mt={2}
            >
              <ArrowUpwardOutlined fontSize="medium" color="success" />
              <Typography color={"green"} sx={{ pl: 1 }} fontWeight={600}>
                {valueChange}
              </Typography>
              <Typography color={"inherit"} sx={{ pl: 1 }}>
                vs last month
              </Typography>
            </Grid>
          ) : (
            <Grid
              container
              alignItems={"center"}
              justifyItems={"center"}
              mt={2}
            >
              <ArrowDownwardOutlined fontSize="small" color="error" />
              <Typography color={"error"} sx={{ pl: 1 }} fontWeight={600}>
                {valueChange}
              </Typography>
              <Typography color={"inherit"} sx={{ pl: 1 }}>
                vs last month
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid item xs={7}>
          <Bar options={options} data={data} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReChartAttendWeek;
