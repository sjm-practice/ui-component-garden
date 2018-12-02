import styled from "styled-components";

const BaseButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    border: 2px solid darkblue;
  }
`;

export default BaseButton;
