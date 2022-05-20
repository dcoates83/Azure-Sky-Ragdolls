import { Box, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Theme, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import createStyles from "@mui/styles/createStyles";
import React from "react";
import MoreOptions from "./MoreOptions";
import PageTitle from "./PageTitle";
import ToggleNav from "./ToggleNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "inherit",
      color: theme.palette.text.primary,
      borderBottom: `1px solid ${theme.palette.divider}`,
      boxShadow: "none",
      position: "relative",
      zIndex: 900,
    },
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    rightMenuItem: {
      display: "flex",
      marginLeft: theme.spacing(1.5),
    },
    optionsButton: {
      boxShadow: "none",
      width: theme.spacing(3),
    },
  })
);

export interface MenuItem {
  component: React.ReactNode;
  priority?: number;
}

export interface NavBarProps {
  pageTitle: string;
  rightMenuItems: MenuItem[];
}

const NavBar: React.FC<NavBarProps> = (props) => {
  // const classes = useStyles();
  const { pageTitle } = props;
  const { rightMenuItems } = props;
  const theme = useTheme();
  const mobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  const sortedRightMenuItems = rightMenuItems?.sort(
    (a, b) => (a.priority ?? 0) - (b.priority ?? 0)
  );

  function _renderChild(menuItem: MenuItem) {
    return menuItem.component;
  }

  return (
    <AppBar
      sx={{
        backgroundColor: "inherit",
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "none",
        position: "relative",
        zIndex: 900,
      }}
      position="sticky"
      id="navBar"
    >
      <Toolbar
        disableGutters
        sx={{
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        }}
      >
        <ToggleNav />
        <PageTitle pageTitle={pageTitle} />
        <Box
          sx={{
            display: "flex",
            marginLeft: theme.spacing(1.5),
          }}
        >
          {mobileSize && sortedRightMenuItems.length > 0 ? (
            <MoreOptions navBarMenuItems={sortedRightMenuItems} />
          ) : (
            sortedRightMenuItems.map((navItem) => (
              <Box
                sx={{
                  display: "flex",
                  marginLeft: theme.spacing(1.5),
                }}
                key={navItem.priority}
              >
                {_renderChild(navItem)}
              </Box>
            ))
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
