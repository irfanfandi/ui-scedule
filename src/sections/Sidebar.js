import {
  AccessTimeOutlined,
  AddTaskOutlined,
  EventOutlined,
  Groups2Outlined,
  HomeOutlined,
  LocalAtmOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  ListItemAvatar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles, styled, useTheme } from "@mui/styles";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    paddingBottom: 50,
  },
  bottomList: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
}));

const openedMixin = (theme) => ({
  backgroundColor: "black",
  width: drawerWidth,
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: "black",
  overflowX: "hidden",
  width: `calc(${theme.spacing(11)})`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(11)})`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const List = styled(MuiList)(({ theme }) => ({
  ".MuiListItemText-root": {
    marginLeft: 0,
  },
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 10,
  },
  "& .MuiListItemButton-root": {
    paddingLeft: 15,
    paddingRight: 15,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiListItemAvatar-root": {
    minWidth: 0,
    marginRight: 16,
    marginLeft: 0,
  },
}));

const menus = [
  {
    link: "/",
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    link: "/attendance",
    name: "Attendance",
    icon: <AddTaskOutlined />,
  },
  {
    link: "/leave",
    name: "Leave",
    icon: <EventOutlined />,
  },
  {
    link: "/employees",
    name: "Employees",
    icon: <Groups2Outlined />,
  },
  {
    link: "/payroll",
    name: "Payroll",
    icon: <LocalAtmOutlined />,
  },
  {
    link: "/schedule",
    name: "Schedule",
    icon: <AccessTimeOutlined />,
  },
];

export default function Sidebar() {
  const theme = useTheme();
  const tabletScreen = useMediaQuery("(max-width:1140px)");
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    if (tabletScreen || pathname === "/schedule") {
      setOpen(false);
    } else {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabletScreen, pathname]);

  return (
    <Fragment>
      <CssBaseline />
      <Drawer
        sx={{
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
        }}
        variant="permanent"
        open={open}
      >
        <Box className={classes.drawerContainer}>
          <Toolbar sx={{ ml: 1, mt: 3 }}>
            <Image
              alt=""
              style={{ borderRadius: 5, marginRight: 10 }}
              width="30"
              height="30"
              src="/logo.jpg"
            />
            {open && (
              <Typography
                variant="h6"
                fontWeight={"bold"}
                color={"white"}
                align="center"
              >
                FORTIUS
              </Typography>
            )}
          </Toolbar>
          <Divider />
          <List component="nav">
            {menus.map(({ icon, name, link }) => (
              <ListItem key={name}>
                <ListItemButton
                  selected={pathname === link}
                  onClick={() => {
                    router.push(link);
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                  {open && (
                    <ListItemText sx={{ color: "white" }} primary={name} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className={classes.bottomList}>
          <List component="nav">
            <ListItem>
              <ListItemButton divider selected={pathname === "setting"}>
                <ListItemIcon sx={{ color: "white" }}>
                  <SettingsOutlined />
                </ListItemIcon>
                {open && (
                  <ListItemText sx={{ color: "white" }} primary={"Setting"} />
                )}
              </ListItemButton>
            </ListItem>
            <Divider light />
            <ListItem>
              <ListItemButton divider>
                <ListItemAvatar>
                  <Avatar sx={{ width: 40, height: 40 }} />
                </ListItemAvatar>
                {open && (
                  <ListItemText
                    sx={{ color: "white" }}
                    primary="Olive"
                    secondary={
                      <Typography
                        sx={{ color: "white" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        olive@gmail.com
                      </Typography>
                    }
                  />
                )}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
}
