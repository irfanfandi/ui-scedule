import { Card, Grid, Typography } from "@mui/material";

const ReChartPie = ({ title }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2 }} elevation={1}>
      <Grid>
        <Typography align="center">{title}</Typography>
      </Grid>
    </Card>
  );
};

export default ReChartPie;
