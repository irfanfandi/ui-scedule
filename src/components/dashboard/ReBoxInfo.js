import { Box, Grid, Typography } from "@mui/material";

const ReBoxInfo = ({ icon, bgColor, title }) => {
  return (
    <Grid container direction={"row"} alignItems={"center"} mt={2}>
      <Box
        elevation={0}
        sx={{
          borderRadius: 1,
          width: 25,
          height: 25,
          backgroundColor: bgColor,
          mr: 2,
        }}
      ></Box>
      <Typography variant="subtitle2">{title}</Typography>
    </Grid>
  );
};

export default ReBoxInfo;
