import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const PostArticle = styled.article`
  min-height: 200px;
`;
export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  //esto empujara el contenido de la imagen para arriba
  position: relative;
  width: 100%;
  margin-top: 20px;
`;
export const Img = styled.img`
  ${fadeIn}
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;
