import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { AccessTimeOutlined, PersonOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    fontSize: 10,
  },
  container: {
    width: "100%",
    borderRadius: theme.spacing(1),
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const months = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];

const date = new Date();
const currentYear = date.getFullYear();
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const rangeYear = range(currentYear, currentYear - 10, -1).map((e) => ({
  label: e.toString(),
  value: e.toString(),
}));

const EventContent = ({ eventData }) => {
  const theme = useTheme();
  const title = eventData.event.title;

  return (
    <Grid
      elevation={0}
      sx={{
        padding: theme.spacing(0.5),
        backgroundColor: "#ECF2FF",
        border: 0,
        borderWidth: 0,
        cursor: "pointer",
      }}
      container
    >
      <Grid container alignItems={"center"}>
        <PersonOutlined fontSize="small" sx={{ color: "black", mr: 1 }} />
        <Typography variant="caption" color={"black"}>
          {title}
        </Typography>
      </Grid>
      <Grid container alignItems={"center"}>
        <AccessTimeOutlined fontSize="small" sx={{ color: "black", mr: 1 }} />
        <Typography variant="caption" color={"black"}>
          Working Hours
        </Typography>
      </Grid>
      <Typography style={{ marginRight: 4 }} variant="caption" color={"black"}>
        14 Hours 30 Minutes
      </Typography>
    </Grid>
  );
};

const ReCardMonthly = () => {
  const theme = useTheme();
  const classes = useStyles();
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  const [selectMoth, setSelectMoth] = useState(currentMonth);
  const [selectYear, setSelectYear] = useState(currentYear);
  const _refCalendar = useRef();

  const handleChangeMoth = (newValue) => {
    const calendarApi = _refCalendar.current.getApi();
    calendarApi.gotoDate(`${selectYear}-${newValue?.value || "01"}-01`);
    setSelectMoth(newValue?.value);
  };

  const handleChangeYear = (newValue) => {
    const calendarApi = _refCalendar.current.getApi();
    calendarApi.gotoDate(`${newValue?.value || "2023"}-${selectMoth}-01`);
    setSelectYear(newValue?.value);
  };

  return (
    <Grid p={2}>
      <Grid container mt={2} direction={"row"}>
        <Grid item xs={10}>
          <Grid container direction={"row"}>
            <Autocomplete
              size="small"
              onChange={(_, newValue) => {
                handleChangeYear(newValue);
              }}
              defaultValue={rangeYear.find(
                (e) => e.value === currentYear.toString()
              )}
              options={rangeYear}
              sx={{ width: 200, mr: 2 }}
              renderInput={(params) => <TextField {...params} label="Year" />}
            />
            <Autocomplete
              size="small"
              onChange={(_, newValue) => {
                handleChangeMoth(newValue);
              }}
              defaultValue={months.find((e) => e.value === currentMonth)}
              options={months}
              sx={{ width: 200 }}
              renderInput={(params) => <TextField {...params} label="Month" />}
            />
          </Grid>
        </Grid>
        <Grid item xs={2} justifyContent="flex-end">
          <Button style={{ float: "right" }} variant="contained">
            Add Schedule
          </Button>
        </Grid>
      </Grid>

      <FullCalendar
        ref={_refCalendar}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "",
          right: "",
          center: "",
        }}
        events={[
          {
            title: "Employee Working 5",
            start: "2023-06-08",
            color: "#ECF2FF",
          },
          {
            title: "Employee Working 5",
            start: "2023-06-23",
            color: "#ECF2FF",
          },
        ]}
        eventContent={(info) => {
          return <EventContent eventData={info} />;
        }}
        progressiveEventRendering
        firstDay={1}
      />
    </Grid>
  );
};

export default ReCardMonthly;
