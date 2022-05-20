import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import NavBar, { NavBarProps } from "./NavBar/NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: "100%",
    height: "100%",
  },

  mainContent: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  contentCol: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
}));

interface PageWrapperProps extends NavBarProps {
  className?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = (props) => {
  const classes = useStyles();

  const { pageTitle, className, children, rightMenuItems } = props;

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.contentCol}>
        <NavBar pageTitle={pageTitle} rightMenuItems={rightMenuItems} />
        <Box className={classes.mainContent}>{children}</Box>
      </div>
    </div>
  );
};

export default PageWrapper;
