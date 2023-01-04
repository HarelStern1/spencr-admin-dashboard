import styled from "styled-components";
import { colors, constants, media } from "../../utils/constants";

export const SideBarWrapper = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  margin: 1rem;
  padding: 0;
  height: calc(100vh - 2rem);
  width: ${({ isOpen }) =>
    isOpen ? `${constants.openSideBarWidth}px` : `${constants.closedSideBarWidth}px`};
  background-color: #333;
  border-radius: 0.75rem;
  background-image: ${colors.sidebarGradient};
  transition: all 0.3s ease;
  overflow-y: auto;
  z-index: 200;

  ${media.tablet} {
    left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.75rem 2rem 0.5rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;
