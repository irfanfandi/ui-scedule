import { Box, Grid, Typography } from "@mui/material";

const ReChipIcon = ({ icon, bgColor, title }) => {
  return (
    <Grid container direction={"row"} alignItems={"center"}>
      <Box
        elevation={0}
        sx={{
          p: 0.5,
          pb: 0,
          borderRadius: 1,
          backgroundColor: bgColor,
          mr: 2,
        }}
      >
        {icon}
      </Box>
      <Typography variant="subtitle2">{title}</Typography>
    </Grid>
  );
};

export default ReChipIcon;
