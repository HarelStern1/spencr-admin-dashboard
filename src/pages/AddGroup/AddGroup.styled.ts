import { TextField } from "@mui/material";
import styled from "styled-components";
import { media } from "../../utils/constants";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const AddGroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.div<{ short?: boolean }>`
  padding: 2rem 2rem 2.75rem 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 0.75rem;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 47%;
`;
