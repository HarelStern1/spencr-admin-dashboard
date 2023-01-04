import { Toolbar, Typography } from "@mui/material";
import { Heading, LinksContainer, SideBarWrapper } from "./SideBar.styled";
import DiamondIcon from "@mui/icons-material/Diamond";
import SideBarTab from "../SideBarTab/SideBarTab";
import { links } from "./data";
import { useLayoutContext } from "../../context/LayoutContext";

const SideBar = () => {
  const { isOpen } = useLayoutContext();

  return (
    <SideBarWrapper isOpen={isOpen}>
      <Heading>
        <DiamondIcon fontSize="large" color="primary" />
        {isOpen && (
          <Typography fontSize="14px" fontWeight={600} color="#fff" align="center">
            Spencr Dashboard
          </Typography>
        )}
      </Heading>
      <Toolbar />
      <LinksContainer>
        {links.map(({ text, to, icon }, idx) => (
          <SideBarTab key={idx} text={text} to={to} icon={icon} />
        ))}
      </LinksContainer>
    </SideBarWrapper>
  );
};

export default SideBar;
