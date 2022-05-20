import { Box, Button, useMediaQuery } from "@mui/material";
import { createStyles, makeStyles, useTheme } from "@mui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        boxShadow: "none",
      },
      // Outer button Container
      [theme.breakpoints.down("xs")]: {
        minWidth: theme.spacing(4),
        height: theme.spacing(4),
      },
      minWidth: theme.spacing(4.5),
      height: theme.spacing(4.5),

      // Fonts
      ...theme.typography.subtitle2,
      [theme.breakpoints.up("xs")]: {
        ...theme.typography.subtitle1,
      },
      // Icon
      "& svg": {
        display: "block",
        fontSize: "large",
      },
      "&:hover ": {
        color: theme.palette.action.active,
      },
    },

    subMenuItemButton: {
      display: "flex",
      alignItems: "center",

      "& button": {
        boxShadow: "none",
        maxHeight: theme.spacing(5),
        textTransform: "capitalize",
      },
      "& button:hover": {
        backgroundColor: "transparent",
      },
    },

    subMenuItemIcon: {
      marginRight: theme.spacing(0.5),
    },
    navButtonAsSubMenu: {
      marginLeft: theme.spacing(0.5),
    },
  })
);

interface NavButtonProps {
  anchorRef: React.RefObject<HTMLButtonElement>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  buttonStyle?: string;
  componentName?: string;
  icon: React.ReactNode;
  // handleClick?: React.SyntheticEvent;
}
interface StyledButtonContentProps {
  componentName?: string;
  icon?: React.ReactNode;
}
const StyledButtonContent: React.FC<StyledButtonContentProps> = (props) => {
  const { componentName, icon } = props;
  const classes = useStyles();
  const theme = useTheme();

  const mobileSize = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Box
      title={componentName}
      sx={clsx({
        display: "flex",
        alignItems: "center",

        "& button": {
          boxShadow: "none",
          maxHeight: theme.spacing(5),
          textTransform: "capitalize",
        },
        "& button:hover": {
          backgroundColor: "transparent",
        },
      })}
    >
      {mobileSize ? (
        <Box
          component="span"
          sx={{
            mr: 0.5,
          }}
        >
          {icon}
        </Box>
      ) : (
        icon
      )}
      {/* {mobileSize ? componentName : null} */}
    </Box>
  );
};
const NavButton: React.FC<NavButtonProps> = (props) => {
  const {
    anchorRef,
    isModalOpen,
    setIsModalOpen,
    buttonStyle,
    componentName,
    icon,
    // handleClick,
  } = props;

  const handleNavButtonClick = () => {
    setIsModalOpen((prevOpen) => !prevOpen);
    // handleClick();
  };

  return (
    <Button
      data-testid="nav-item-button"
      ref={anchorRef}
      aria-controls={isModalOpen ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      onClick={() => handleNavButtonClick()}
      sx={clsx(buttonStyle, {
        p: 1,
        [theme.breakpoints.down("xs")]: {
          boxShadow: "none",
        },
        // Outer button Container
        [theme.breakpoints.down("xs")]: {
          minWidth: 4,
          height: 4,
        },
        minWidth: 4.5,
        height: 4.5,

        // Fonts
        ...theme.typography.subtitle2,
        [theme.breakpoints.up("xs")]: {
          ...theme.typography.subtitle1,
        },
        // Icon
        "& svg": {
          display: "block",
          fontSize: "large",
        },
        "&:hover ": {
          color: "text.palette.action.active",
        },
      })}
    >
      <StyledButtonContent componentName={componentName} icon={icon} />
    </Button>
  );
};

export default NavButton;
