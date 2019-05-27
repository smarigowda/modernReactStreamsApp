import styled, { css } from "styled-components";

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 2rem;

  ${ props => props.error && css`color: red;`}
`;
