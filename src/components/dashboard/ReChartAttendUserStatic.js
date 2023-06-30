import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import ReBoxInfo from "./ReBoxInfo";

const ReChartAttendUserStatic = () => {
  const theme = useTheme();

  return (
    <Grid container sx={{ p: 2 }}>
      <Grid container direction={"row"} justifyContent={"space-between"}>
        <Grid item>
          <Typography variant="inherit" color={"black"}>
            All Users Statistics
          </Typography>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            24,246 <span style={{ fontSize: 17, fontWeight: 500 }}>Users</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="inherit" color={"black"}>
            Average Visit TIme
          </Typography>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            2 <span style={{ fontSize: 17, fontWeight: 500 }}>Hours</span> 35{" "}
            <span style={{ fontSize: 17, fontWeight: 500 }}>Minutes</span>
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ mt: 8 }} variant="inherit" color={"black"}>
        Top Visited Area
      </Typography>
      <Box sx={{ width: "100%", mt: 2 }}>
        <LinearProgress
          variant="determinate"
          color="warning"
          value={50}
          sx={{
            height: 25,
            borderRadius: 10,
          }}
        />
      </Box>
      <Grid mt={2} container>
        <Grid item xs={6}>
          <ReBoxInfo bgColor={theme.palette.warning.main} title={"Kebayoran"} />
          <ReBoxInfo bgColor={theme.palette.primary.main} title={"Kelurahan"} />
          <ReBoxInfo bgColor={theme.palette.success.main} title={"Margohayu"} />
        </Grid>
        <Grid item xss={6}>
          <ReBoxInfo
            bgColor={theme.palette.error.main}
            title={"Sawangan Lama"}
          />
          <ReBoxInfo bgColor={theme.palette.secondary.main} title={"Cakung"} />
          <ReBoxInfo bgColor={theme.palette.warning.main} title={"Others"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReChartAttendUserStatic;
