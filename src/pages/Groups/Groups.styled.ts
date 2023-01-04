import styled from "styled-components";
import { media } from "../../utils/constants";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;

  ${media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${media.burger} {
    grid-template-columns: 1fr 1fr;
  }
  ${media.small} {
    grid-template-columns: 1fr;
  }
`;
