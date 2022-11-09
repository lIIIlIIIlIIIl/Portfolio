import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const margin75 = css`
  width: 75%;
  margin: 0 auto;
`;

export const boxSize_1084px = css`
  width: 1084px;
`;

export const boxSize_920px = css`
  width: 920px;
`;

export const media_desktop2 = css`
  @media (max-width: 1440px) {
    width: 1084px;
  }
`;

export const media_desktop1 = css`
  @media (max-width: 1279px) {
    width: 920px;
  }
`;

export const media_tablet2 = css`
  @media (max-width: 1024) {
    width: 100%;
    padding: 28px 36px;
  }
`;

export const media_tablet1 = css`
  @media (max-width: 768px) {
    width: 100%;
    padding: 28px 36px;
  }
`;
