import styled from "styled-components";
import { constants, media } from "../../utils/constants";

export const LayoutWrapper = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: ${({ isOpen }) =>
    isOpen
      ? `${constants.openSideBarWidth + 32}px auto`
      : `${constants.closedSideBarWidth + 32}px auto`};
  transition: all 0.3s ease;

  ${media.tablet} {
    grid-template-columns: 100%;
  }
`;

export const CustomBox = styled.main<{ isOpen: boolean }>`
  position: relative;
  transition: all 0.3s ease;
  padding: 50px 28px;
  margin-right: 1rem;

  ${media.mobile} {
    margin-right: 0;
  }
`;

export const SideBarContainer = styled.div`
  position: relative;
`;
