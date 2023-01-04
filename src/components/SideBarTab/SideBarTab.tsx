import { FC, ReactElement } from "react";
import { TabWrapper } from "./SideBarTab.styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLayoutContext } from "../../context/LayoutContext";
import useMediaQuery from "../../hooks/useMediaQuery";

interface SidebarTabProps {
  text: string;
  to: string;
  icon: ReactElement;
}

const SideBarTab: FC<SidebarTabProps> = ({ text, to, icon }) => {
  const { isOpen, setIsOpen } = useLayoutContext();
  const isTablet = useMediaQuery(1200);

  const handleClick = () => {
    isTablet && setIsOpen(false);
  };

  return (
    <Link to={to}>
      <TabWrapper onClick={handleClick}>
        {icon}
        <Typography fontSize="15px" fontWeight={300} color="#fff">
          {isOpen && text}
        </Typography>
      </TabWrapper>
    </Link>
  );
};

export default SideBarTab;
