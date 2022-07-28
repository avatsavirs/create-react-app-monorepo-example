import { css } from 'styled-components';

export const flex = css`
  display: flex;
`;

export const wrap = css`
  flex-wrap: wrap;
`;

export const col = css`
  flex-direction: column;
`;

export const row = css`
  flex-direction: row;
`;

export const center = css`
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const itemCenter = css`
  align-items: center;
`;

export const justifyCenter = css`
  justify-content: center;
`;

export const justifyApart = css`
  justify-content: space-between;
`;

export const justifyEnd = css`
  justify-content: flex-end;
`;

export const itemStart = css`
  align-items: flex-start;
`;

export const justifyBetween = css`
  justify-content: space-between;
  align-content: center;
`;

export const justifyAround = css`
  justify-content: space-around;
  align-content: center;
`;

export const justifyStart = css`
  justify-content: start;
`;

export const alignCenter = css`
  align-items: center;
`;

export const rowReverse = css`
  flex-direction: row-reverse;
`;
