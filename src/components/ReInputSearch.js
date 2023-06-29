import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    width: "100%",
    borderRadius: 4,
  },
}));

const ReInputSearch = (props) => {
  const classes = useStyles();

  return (
    <>
      <TextField
        className={classes.inputSearch}
        label={"Search"}
        style={{
          ...props.style,
        }}
        variant="outlined"
        size={"small"}
        type={props.type}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        InputLabelProps={props.InputLabelProps}
      />
    </>
  );
};

export default ReInputSearch;
