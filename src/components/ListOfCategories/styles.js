import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 10px 0 30px;
  ${(props) =>
    props.fixed &&
    css`
       {
        background: #fff;
        border-radius: 100px;
        box-shadow: 0 0 20 rgba(0, 0, 0, 0.3);
        left: 0;
        right: 0;
        top: -4px;
        margin: 0 auto;
        width: 86vw;
        max-width: 600px;
        padding: 10px;
        position: fixed;
        transform: scale(0.7);
        z-index: 1;
        ${fadeIn("0.5")};
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
