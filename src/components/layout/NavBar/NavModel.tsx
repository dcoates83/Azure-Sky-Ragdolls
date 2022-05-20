/* eslint-disable react/jsx-props-no-spreading */
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  PopperProps,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    modalMenu: {
      zIndex: 1299,
    },
  })
);

interface NavModalProps {
  anchorRef: React.RefObject<HTMLButtonElement>;
  modalProps?: Omit<PopperProps, "children" | "open">;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const NavModal: React.FC<NavModalProps> = (props) => {
  const { children, anchorRef, modalProps, isModalOpen, setIsModalOpen } =
    props;
  const classes = useStyles();
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setIsModalOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(isModalOpen);
  React.useEffect(() => {
    if (prevOpen.current === true && isModalOpen === false) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      anchorRef.current!.focus();
    }
    prevOpen.current = isModalOpen;
  }, [isModalOpen]);
  return (
    <Popper
      data-testid="nav-modal"
      {...modalProps}
      open={isModalOpen}
      anchorEl={anchorRef.current}
      transition
      className={classes.modalMenu}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={() => handleClose}>
              <MenuList>{children}</MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
export default NavModal;
