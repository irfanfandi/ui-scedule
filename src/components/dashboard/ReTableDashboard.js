import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
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

const rowsData = {
  Employeess: {
    username: "Tony",
    avatar: "",
  },
  col1: "Medical Leave",
  col2: "20 Days",
};
const headerConf = {
  headerClassName: "header-col",
  width: 195,
};

const ReTableDashboard = () => {
  const columns = [
    {
      field: "Employeess",
      headerName: "Employeess Name",
      headerClassName: "header-col",
      width: 200,
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
      headerName: "Type of Leave",
      ...headerConf,
    },
    {
      field: "col2",
      headerName: "Total Days",
      ...headerConf,
    },
  ];

  const rows = Array(7)
    .fill(rowsData)
    .map((e, i) => ({ id: i, ...e }));

  return (
    <Grid
      sx={{
        "& .header-col": {
          backgroundColor: "#ECF8F9",
        },
        pl: 8,
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
      </Grid>
      <Grid container direction={"row"}>
        <StyledDataGrid rows={rows} columns={columns} />
      </Grid>
    </Grid>
  );
};

export default ReTableDashboard;
