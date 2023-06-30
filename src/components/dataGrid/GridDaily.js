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
    avatar: "",
  },
  col1: "+",
  col2: "+",
  col3: "+",
  col4: "+",
  col5: "+",
  col6: "+",
  col7: "+",
  col8: "+",
  col9: "+",
  col10: "+",
  col11: "+",
  col12: "+",
  col13: "+",
  col14: "+",
  col15: "+",
  col16: "+",
  col17: "+",
  col18: "+",
  col19: "+",
  col20: "+",
};
const headerConf = {
  headerClassName: "header-col",
  width: 70,
  headerAlign: "center",
  align: "center",
};

const GridDaily = () => {
  const columns = [
    {
      field: "Employeess",
      headerName: "Employeess",
      width: 205,
      headerClassName: "header-col",
      headerAlign: "center",
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
      headerName: "6 am",
      ...headerConf,
    },
    {
      field: "col2",
      headerName: "6 am",
      ...headerConf,
    },
    {
      field: "col3",
      headerName: "7 am",
      ...headerConf,
    },
    {
      field: "col4",
      headerName: "8 am",
      ...headerConf,
    },
    {
      field: "col5",
      headerName: "9 am",
      ...headerConf,
    },
    {
      field: "col6",
      headerName: "10 am",
      ...headerConf,
    },
    {
      field: "col7",
      headerName: "11 am",
      ...headerConf,
    },
    {
      field: "col8",
      headerName: "12 am",
      ...headerConf,
    },
    {
      field: "col9",
      headerName: "1 pm",
      ...headerConf,
    },
    {
      field: "col10",
      headerName: "2 pm",
      ...headerConf,
    },
    {
      field: "col11",
      headerName: "3 pm",
      ...headerConf,
    },
    {
      field: "col12",
      headerName: "4 pm",
      ...headerConf,
    },
    {
      field: "col13",
      headerName: "5 pm",
      ...headerConf,
    },
    {
      field: "col14",
      headerName: "6 pm",
      ...headerConf,
    },
    {
      field: "col15",
      headerName: "7 pm",
      ...headerConf,
    },
    {
      field: "col16",
      headerName: "8 pm",
      ...headerConf,
    },
    {
      field: "col17",
      headerName: "9 pm",
      ...headerConf,
    },
    {
      field: "col18",
      headerName: "10 pm",
      ...headerConf,
    },
    {
      field: "col19",
      headerName: "11 pm",
      ...headerConf,
    },
    {
      field: "col20",
      headerName: "12 pm",
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
      <StyledDataGrid
        initialState={{
          pinnedColumns: {
            left: ["Employeess"],
          },
        }}
        rows={rows}
        columns={columns}
      />
    </Grid>
  );
};

export default GridDaily;
