import styled from "styled-components";
import { media } from "../../utils/constants";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  padding: 0.75rem;
  background-color: #fff;
  border-radius: 0.75rem;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 0.75rem;
`;

export const BottomFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  ${media.mobile} {
    flex-direction: column;
  }
`;
