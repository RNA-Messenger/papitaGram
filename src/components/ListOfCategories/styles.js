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
        left: 0;
        right: 0;
        top: -4px;
        /* justify-content: space-around; */
        margin: 0 auto;
        width: 100vw;
        max-width: 500px;
        padding: 10px;
        position: fixed;
        z-index: 1;
        ${fadeIn("0.5")};
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        li {
          transform: scale(0.75);
          padding: 0;
        }
      }
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
