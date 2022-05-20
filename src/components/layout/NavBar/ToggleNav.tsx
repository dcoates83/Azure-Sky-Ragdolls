import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import NavContext from "../../../contexts/NavContext";

const useStyles = makeStyles((theme) => ({
  toggleNav: {
    fontSize: theme.spacing(3),
    // Media Queries
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.spacing(4),
    },
  },
}));

function ToggleNav() {
  const navContext = useContext(NavContext);
  const classes = useStyles();
  const handleToggle = () => {
    navContext.toggleNav();
    navContext.setNav(!navContext.navOpen);
  };
  return (
    <IconButton
      onClick={handleToggle}
      edge="start"
      color="inherit"
      aria-label="toggle-menu"
      className={classes.toggleNav}
      size="large"
    >
      {/* Toggle Menu Icon based on state */}
      {navContext.navOpen === false ? (
        <MenuRoundedIcon
          data-testid="menuIcon-closed"
          className={classes.toggleNav}
        />
      ) : (
        <MenuOpenRoundedIcon
          data-testid="menuIcon-open"
          className={classes.toggleNav}
        />
      )}
    </IconButton>
  );
}

export default ToggleNav;
