import { MenuItem } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import NavModal from "./NavModel";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        boxShadow: "none",
      },
      // Outer button Container
      [theme.breakpoints.down("xs")]: {
        minWidth: theme.spacing(3),
        height: theme.spacing(3),
      },
      minWidth: theme.spacing(4),
      height: theme.spacing(4),

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
        backgroundColor: theme.palette.action.focus,
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
        color: theme.palette.text.primary,
      },
    },
  })
);

interface ModalMenuItem {
  component?: React.ReactNode;
}
interface ModalMenuProps {
  modalMenuItems: ModalMenuItem[];
  anchorRef: React.RefObject<HTMLButtonElement>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewMenuItem: React.FC<ModalMenuItem> = (props) => {
  const classes = useStyles();
  const { component } = props;

  function _renderChild(menuComponent: React.ReactNode) {
    return menuComponent;
  }

  return (
    <MenuItem className={clsx(classes.button, classes.subMenuItemButton)}>
      {_renderChild(component)}
    </MenuItem>
  );
};

const MoreOptionsButtonModal: React.FC<ModalMenuProps> = (props) => {
  const { modalMenuItems, anchorRef, isModalOpen, setIsModalOpen } = props;
  return (
    <NavModal
      // data-testid="buttonModal"
      anchorRef={anchorRef}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    >
      {modalMenuItems &&
        modalMenuItems.map((navItem) => (
          <NewMenuItem
            key={String(navItem.component)}
            component={navItem.component}
          />
        ))}
    </NavModal>
  );
};
export default MoreOptionsButtonModal;
