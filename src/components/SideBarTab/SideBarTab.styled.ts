import styled from "styled-components";

export const TabWrapper = styled.div`
  position: relative;
  margin: 1.5px 1rem;
  padding: 0.75rem 1.25rem;
  display: flex;
  gap: 14px;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
