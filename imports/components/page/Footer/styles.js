import styled from "styled-components";

/* Footer Styling */
const BaseFooter = styled.footer`
  background-color: #f28020;
  color: #fff;
  font-size: 0.8em;
  padding: 1.25em 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  img {
    margin-left: 10%;
    margin-right: 3px;
  }

  span {
    margin: 4px;
  }

  @media all and (max-width: 599px) {
    & {
      flex-direction: column;
    }

    img {
      margin: 0 0 4px 0;
    }
  }
`;

export default BaseFooter;
