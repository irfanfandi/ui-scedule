import styled from "@emotion/styled";
import { CheckOutlined, Close, DoNotDisturb } from "@mui/icons-material";
import { Box, Card, Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ReChipIcon from "./ReChipIcon";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ReChartLeaveLine = ({ style = {} }) => {
  return (
    <Card sx={{ p: 2, borderRadius: 2, ...style }} elevation={1}>
      <Grid container justifyContent={"space-between"} direction={"row"} pr={2}>
        <Grid item>
          <ReChipIcon
            icon={<CheckOutlined fontSize="small" color="primary" />}
            bgColor={"#C9EEFF"}
            title="Annual"
          />
        </Grid>
        <Grid item>
          <ReChipIcon
            title="Medical"
            icon={<Close fontSize="small" color="primary" />}
            bgColor={"rgb(183, 153, 255)"}
          />
        </Grid>
        <Grid item>
          <ReChipIcon
            icon={<DoNotDisturb fontSize="small" color="error" />}
            bgColor={"#FFCDA8"}
            title="Other"
          />
        </Grid>
      </Grid>
      <Grid mt={2}>
        <Grid
          container
          justifyContent={"space-between"}
          direction={"row"}
          mb={2}
          pr={2}
        >
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            2,100
          </Typography>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            250
          </Typography>
          <Typography variant="h4" fontWeight={700} color={"black"} mt={4}>
            100
          </Typography>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              height: 10,
              borderRadius: 10,
            }}
          />
        </Box>
      </Grid>
    </Card>
  );
};

export default ReChartLeaveLine;
