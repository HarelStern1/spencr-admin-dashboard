import { useEffect, useState } from "react";
import { IconButton, TextField, Typography } from "@mui/material";
import { AppBarWrapper, Left, Right } from "./AppBar.styled";
import { colors, pathToTitleMap } from "../../utils/constants";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useLayoutContext } from "../../context/LayoutContext";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const AppBar = () => {
  const [bgColor, setBgColor] = useState<"transparent" | "white">("transparent");
  const { isOpen, setIsOpen } = useLayoutContext();
  const location = useLocation();
  const isTablet = useMediaQuery(1200);

  const toggleSideBar = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.pageYOffset > 0) {
        setBgColor("white");
      } else {
        setBgColor("transparent");
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <AppBarWrapper isOpen={isOpen} bgColor={bgColor}>
      <Left>
        <Typography color={colors.grayText} fontWeight={700}>
          {pathToTitleMap[location.pathname as keyof typeof pathToTitleMap]}
        </Typography>
        {!isTablet && (
          <IconButton onClick={toggleSideBar}>
            {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Left>
      <Right>
        {isTablet && (
          <IconButton onClick={toggleSideBar}>
            {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        )}
        <Typography>User</Typography>
      </Right>
    </AppBarWrapper>
  );
};

export default AppBar;
