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

const ReChartPie = ({ title }) => {
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
              labels: ["Male", "Female"],
              datasets: [
                {
                  data: [300, 100],
                  backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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
