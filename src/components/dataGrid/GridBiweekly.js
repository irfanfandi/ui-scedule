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
  col8: "+",
  col9: "+",
  col10: "+",
  col11: "+",
  col12: "+",
  col13: "+",
  col14: "+",
};
const headerConf = {
  headerClassName: "header-col",
  width: 95,
  headerAlign: "center",
  align: "center",
};

const GridBiweekly = () => {
  const columns = [
    {
      field: "Employeess",
      headerName: "Employeess",
      width: 140,
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
    {
      field: "col8",
      headerName: "SAT 8",
      ...headerConf,
    },
    {
      field: "col9",
      headerName: "SUN 9",
      ...headerConf,
    },
    {
      field: "col10",
      headerName: "MON 10",
      ...headerConf,
    },
    {
      field: "col11",
      headerName: "TUE 11",
      ...headerConf,
    },
    {
      field: "col12",
      headerName: "WED 12",
      ...headerConf,
      width: 90,
    },
    {
      field: "col13",
      headerName: "THU 13",
      ...headerConf,
      width: 90,
    },
    {
      field: "col14",
      headerName: "FRID 14",
      ...headerConf,
      width: 90,
    },
  ];

  const rows = [
    {
      id: "1",
      ...rowsData,
      col1: "7am-3pm",
    },
    {
      id: "2",
      ...rowsData,
    },
    {
      id: "3",
      ...rowsData,
    },
    {
      id: "4",

      ...rowsData,
    },
    {
      id: "5",
      ...rowsData,
    },
  ];

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

export default GridBiweekly;
