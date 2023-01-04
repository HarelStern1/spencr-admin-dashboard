import styled from "styled-components";
import { Box } from "@mui/system";
import { media } from "../../utils/constants";

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: #fff;
  box-shadow: 24;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem 3rem;

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`;
