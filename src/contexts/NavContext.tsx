import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface ContextState {
  navOpen: boolean;
  toggleNav: () => void;
  // eslint-disable-next-line no-unused-vars
  setNav: (state: boolean) => void;
}

const NavContext = React.createContext<ContextState>(null as never);

const NavContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [open, setOpen] = useLocalStorage("side-nav-expanded", false);

  function _toggleNav() {
    setOpen((val: boolean) => !val);
  }

  function _setNav(state: boolean) {
    setOpen(state);
  }

  const { children } = props;

  return (
    <NavContext.Provider
      value={{
        navOpen: open,
        toggleNav: _toggleNav,
        setNav: _setNav,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const NavProvider = NavContextProvider;
export const NavConsumer = NavContext.Consumer;
export default NavContext;
