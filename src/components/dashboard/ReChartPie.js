import { Card, Grid, Typography } from "@mui/material";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  DoughnutController,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend
);

const ReChartPie = ({ title, backgroundColor, labels }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2 }} elevation={3}>
      <Grid>
        <Typography align="center">{title}</Typography>
        <div
          style={{
            position: "relative",
            margin: "auto",
            width: "11vw",
            height: "25vh",
          }}
        >
          <Doughnut
            data={{
              labels,
              datasets: [
                {
                  data: [200, 100],
                  backgroundColor,
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>
      </Grid>
    </Card>
  );
};

export default ReChartPie;
