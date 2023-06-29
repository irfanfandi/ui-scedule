import ReCardBiweekly from "@/components/ReCardBiweekly";
import ReCardDaily from "@/components/ReCardDaily";
import ReCardMonthly from "@/components/ReCardMonthly";
import ReCardWeekly from "@/components/ReCardWeekly ";
import ReInputSearch from "@/components/ReInputSearch";
import Layout from "@/sections/Layout";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Box, Card, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { useState } from "react";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Schedule() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Layout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={9}>
          <Typography variant="h6" color="blue" fontWeight={800}>
            COMPANY NAME
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          xs={3}
          alignItems={"center"}
          justifyContent="flex-end"
        >
          <Grid item>
            <Paper
              elevation={0}
              sx={{
                border: 1,
                borderColor: "GrayText",
                py: 0.7,
                px: 2,
                mr: 2,
                borderRadius: 1,
              }}
            >
              <NotificationsNoneOutlined fontSize="small" />
            </Paper>
          </Grid>
          <ReInputSearch style={{ width: 200 }} />
        </Grid>
      </Grid>
      <Card className={classes.container}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
          >
            <Tab label="Monthly" {...a11yProps(0)} />
            <Tab label="Biweekly" {...a11yProps(1)} />
            <Tab label="Weekly" {...a11yProps(2)} />
            <Tab label="Daily" {...a11yProps(3)} />
          </Tabs>
        </Box>
        {value === 0 && <ReCardMonthly />}
        {value === 1 && <ReCardBiweekly />}
        {value === 2 && <ReCardWeekly />}
        {value === 3 && <ReCardDaily />}
      </Card>
    </Layout>
  );
}
