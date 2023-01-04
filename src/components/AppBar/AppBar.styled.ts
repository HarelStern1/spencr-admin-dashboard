import styled, { css } from "styled-components";
import { constants, media } from "../../utils/constants";

export const AppBarWrapper = styled.div<{ isOpen: boolean; bgColor: string }>`
  position: fixed;
  top: 0;
  right: 1rem;
  width: ${({ isOpen }) =>
    isOpen
      ? `calc(100% - ${constants.openSideBarWidth + 74}px)`
      : `calc(100% - ${constants.closedSideBarWidth + 74}px)`};
  height: 52px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
  border-radius: 0.75rem;
  padding: 0.75rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  ${({ bgColor }) => {
    if (bgColor === "white") {
      return css`
        box-shadow: rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset,
          rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
        backdrop-filter: saturate(200%) blur(1.875rem);
        background-color: rgba(255, 255, 255, 0.8);
      `;
    }
  }}

  ${media.desktop} {
    width: calc(100% - 3.5rem);
  }

  > div {
    padding: 1rem;
  }
`;

export const Left = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
