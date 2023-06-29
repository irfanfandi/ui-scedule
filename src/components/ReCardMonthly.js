import { months } from "@/pages/schedule/constant";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Autocomplete, Button, Grid, TextField } from "@mui/material";
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

const date = new Date();
const currentYear = date.getFullYear();
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
const rangeYear = range(currentYear, currentYear - 10, -1).map((e) => ({
  label: e.toString(),
  value: e.toString(),
}));

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
        <Grid container xs={10} direction={"row"}>
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
        <Grid item xs={2} justifyContent="flex-end">
          <Button style={{ float: "right" }} variant="contained">
            Add Schedule
          </Button>
        </Grid>
      </Grid>

      <FullCalendar
        ref={_refCalendar}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "",
          right: "",
          center: "",
        }}
        progressiveEventRendering
        firstDay={1}
      />
    </Grid>
  );
};

export default ReCardMonthly;
