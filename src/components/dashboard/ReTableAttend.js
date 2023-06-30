import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
}));

const rowsData = [
  {
    id: "1",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#A7EDE7", title: "Early CheckIn", fontColor: "green" },
    col6: { title: "Details" },
  },
  {
    id: "2",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#AEE2FF", title: "On Time", fontColor: "blue" },
    col6: { title: "Details" },
  },
  {
    id: "3",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#FFBDF7", title: "Absent", fontColor: "red" },
    col6: { title: "Details" },
  },
  {
    id: "4",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#E1AEFF", title: "Late Checkin", fontColor: "purple" },
    col6: { title: "Details" },
  },
  {
    id: "5",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#F6FFA6", title: "Early Chekout", fontColor: "orange" },
    col6: { title: "Details" },
  },
  {
    id: "6",
    Employeess: {
      username: "Tony",
      avatar: "",
    },
    col1: "09.00",
    col2: "Singapore",
    col3: "09.00",
    col4: "Singapore",
    col5: { bgColor: "#FFCDA8", title: "Late Chekout", fontColor: "orange" },
    col6: { title: "Details" },
  },
];

const headerConf = {
  headerClassName: "header-col",
  width: 225,
};

const ReTableAttend = () => {
  const columns = [
    {
      field: "Employeess",
      headerName: "Employeess Name",
      headerClassName: "header-col",
      width: 225,
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value.avatar} sx={{ mr: 2 }} />
            {params.value.username}
          </>
        );
      },
    },
    {
      field: "col1",
      headerName: "Time",
      ...headerConf,
    },
    {
      field: "col2",
      headerName: "Location",
      ...headerConf,
    },
    {
      field: "col3",
      headerName: "Time",
      ...headerConf,
    },
    {
      field: "col4",
      headerName: "Location",
      ...headerConf,
    },
    {
      field: "col5",
      headerName: "Status",
      ...headerConf,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <Box
              elevation={0}
              sx={{
                p: 0.5,
                px: 1,
                borderRadius: 10,
                backgroundColor: params.value.bgColor,
              }}
            >
              <Typography
                fontSize={11}
                color={params.value.fontColor}
                fontWeight={700}
              >
                {params.value.title}
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: "col6",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Typography
              fontSize={14}
              sx={{ color: "#0096FF" }}
              fontWeight={700}
            >
              {params.value.title}
            </Typography>
          </>
        );
      },
      ...headerConf,
    },
  ];

  return (
    <Grid
      sx={{
        "& .header-col": {
          backgroundColor: "#ECF8F9",
        },
      }}
      container
      justifyContent={"center"}
    >
      <Grid
        container
        direction={"row"}
        mb={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <IconButton size="small" sx={{ backgroundColor: "whitesmoke" }}>
          <ArrowBackIosNewOutlined fontSize="small" />
        </IconButton>
        <Typography sx={{ px: 2 }}>Tue, 16 Aus 2023</Typography>
        <IconButton size="small" sx={{ backgroundColor: "whitesmoke" }}>
          <ArrowForwardIosOutlined fontSize="small" />
        </IconButton>
        {/* <Grid xs={3}>
          <Button
            style={{ float: "right" }}
            variant="outlined"
            color="inherit"
            startIcon={<FilterList />}
          >
            More Filters
          </Button>
        </Grid> */}
      </Grid>
      <Grid container direction={"row"}>
        <StyledDataGrid rows={rowsData} columns={columns} />
      </Grid>
    </Grid>
  );
};

export default ReTableAttend;
