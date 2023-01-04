import { FC, ReactElement } from "react";
import { TabWrapper } from "./SideBarTab.styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLayoutContext } from "../../context/LayoutContext";

interface SidebarTabProps {
  text: string;
  to: string;
  icon: ReactElement;
}

const SideBarTab: FC<SidebarTabProps> = ({ text, to, icon }) => {
  const { isOpen } = useLayoutContext();

  return (
    <Link to={to}>
      <TabWrapper>
        {icon}
        <Typography fontSize="15px" fontWeight={300} color="#fff">
          {isOpen && text}
        </Typography>
      </TabWrapper>
    </Link>
  );
};

export default SideBarTab;
