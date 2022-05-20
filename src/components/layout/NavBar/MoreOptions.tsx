/* eslint-disable react/jsx-props-no-spreading */

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import React from "react";
import MoreOptionsButtonModal from "./MoreOptionsButtonModal";
import NavButton from "./NavButton";
export interface MenuItem {
  component: React.ReactNode;
}
interface MoreOptionsProps {
  buttonStyle?: string;
  navBarMenuItems: MenuItem[];
}
const MoreOptions: React.FC<MoreOptionsProps> = (props) => {
  const { navBarMenuItems, buttonStyle } = props;

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <NavButton
        icon={<MoreVertRoundedIcon data-testid="vertIcon" />}
        anchorRef={anchorRef}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        buttonStyle={buttonStyle}
      />

      <MoreOptionsButtonModal
        modalMenuItems={navBarMenuItems}
        anchorRef={anchorRef}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default MoreOptions;
