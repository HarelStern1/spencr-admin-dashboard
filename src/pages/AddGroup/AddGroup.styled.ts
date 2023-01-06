import { TextField } from "@mui/material";
import styled from "styled-components";
import { media } from "../../utils/constants";
import { colors } from "../../utils/constants";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ImagesHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const AddGroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "product group"
    "product images";
  gap: 30px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr;
    grid-template-areas:
      "product "
      "group"
      "images";
  }
`;

export const Form = styled.div<{ area: string; fit?: boolean }>`
  padding: 2rem 2rem 2.75rem 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0;
  grid-area: ${({ area }) => (area ? area : null)};
  height: ${({ fit }) => (fit ? "fit-content" : null)};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;

    > img {
      width: 120px;
      height: 120px;
      border-radius: 0.25rem;
      z-index: 10;
    }
  }
`;

export const TextFieldContainer = styled.div`
  width: 100%;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

export const ImagePlaceholder = styled.figure`
  margin: 30px 0 0;
  border: 2px dotted ${colors.grayText};
  padding: 2rem 2.5rem;
  border-radius: 0.25rem;
`;
