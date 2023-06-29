import {
  AddOutlined,
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
  DeleteOutline,
  EditOutlined,
} from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import GridDaily from "./dataGrid/GridDaily";

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    fontSize: 10,
  },
  container: {
    borderRadius: theme.spacing(1),
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const ReCardDaily = () => {
  return (
    <Grid p={2}>
      <Grid container mt={2} direction={"row"}>
        <Grid item xs={10} direction={"row"}>
          <Autocomplete
            size="small"
            options={[]}
            sx={{ width: 260, mr: 2 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Department" />
            )}
          />
        </Grid>
        <Grid item xs={2} justifyContent="flex-end">
          <Grid sx={{ float: "right" }}>
            <Button
              sx={{ width: 100 }}
              color="secondary"
              variant="outlined"
              size="small"
              startIcon={<ArrowBackIosNewOutlined fontSize="small" />}
            >
              1 Mar
            </Button>
            <Button
              sx={{ width: 100 }}
              size="small"
              color="secondary"
              variant="outlined"
              endIcon={<ArrowForwardIosOutlined fontSize="small" />}
            >
              14 Mar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={1} direction={"row"}>
        <Grid item xs={2}>
          <Paper elevation={1} sx={{ width: 260, px: 1, py: 2, mt: 1 }}>
            <Grid container direction={"row"} justifyContent={"space-between"}>
              <Typography>Add Schedule</Typography>
              <AddOutlined />
            </Grid>
          </Paper>

          {Array(7)
            .fill(null)
            .map((_, i) => (
              <Paper elevation={1} key={i} sx={{ width: 260, p: 1.5, mt: 1 }}>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Typography>7.30am - 3.30pm</Typography>
                  <Grid item>
                    <EditOutlined />
                    <DeleteOutline />
                  </Grid>
                </Grid>
              </Paper>
            ))}
        </Grid>
        <Grid item xs={10}>
          <GridDaily />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReCardDaily;
