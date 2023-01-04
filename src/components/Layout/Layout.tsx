import SideBar from "../SideBar/SideBar";
import AppBar from "../AppBar/AppBar";
import { CustomBox, LayoutWrapper, SideBarContainer } from "./Layout.styled";
import { FC, ReactElement } from "react";
import { useLayoutContext } from "../../context/LayoutContext";
import { Toolbar } from "@mui/material";

interface LayoutProps {
  children: ReactElement | ReactElement[] | string;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { isOpen } = useLayoutContext();

  return (
    <LayoutWrapper isOpen={isOpen}>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <div>
        <AppBar />
        <CustomBox isOpen={isOpen}>
          <Toolbar />
          {children}
        </CustomBox>
      </div>
    </LayoutWrapper>
  );
};

export default Layout;
