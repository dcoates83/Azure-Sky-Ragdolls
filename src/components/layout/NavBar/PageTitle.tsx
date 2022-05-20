import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.primary,
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

export interface PageTitleProps {
  pageTitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const classes = useStyles();
  const { pageTitle } = props;

  return (
    <Typography variant="h6" className={classes.title}>
      {pageTitle}
    </Typography>
  );
};
export default PageTitle;
