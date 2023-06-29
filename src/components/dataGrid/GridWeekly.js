import { Avatar, Grid } from "@mui/material";
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
    avatar:
      "https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png",
  },
  col1: "+",
  col2: "+",
  col3: "+",
  col4: "+",
  col5: "+",
  col6: "+",
  col7: "+",
};
const headerConf = {
  headerClassName: "header-col",
  width: 170,
  headerAlign: "center",
  align: "center",
};

const GridWeekly = () => {
  const columns = [
    {
      field: "Employeess",
      headerName: "Employeess",
      width: 265,
      headerClassName: "header-col",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <>
            <Avatar src={params.value.avatar} />
            {params.value.username}
          </>
        );
      },
    },
    {
      field: "col1",
      headerName: "SUN 1",
      ...headerConf,
    },
    {
      field: "col2",
      headerName: "MON 2",
      ...headerConf,
    },
    {
      field: "col3",
      headerName: "TUE 3",
      ...headerConf,
    },
    {
      field: "col4",
      headerName: "WED 4",
      ...headerConf,
    },
    {
      field: "col5",
      headerName: "THU 5",
      ...headerConf,
    },
    {
      field: "col6",
      headerName: "THU 6",
      ...headerConf,
    },
    {
      field: "col7",
      headerName: "FRI 7",
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
      }}
    >
      <StyledDataGrid rows={rows} columns={columns} />
    </Grid>
  );
};

export default GridWeekly;
