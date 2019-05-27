import styled from "styled-components";

export const Input = styled.input`
  font-size: 1rem;
  width: 250px;
  padding: 1rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 1px rgba(81, 203, 238, 1);
    border: .2px solid rgba(81, 203, 238, 1);
    transition: all 0.30s ease-out;
  }
`;
