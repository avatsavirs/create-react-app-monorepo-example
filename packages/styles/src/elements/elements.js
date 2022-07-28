import { css } from 'styled-components';
import box from '../box';
import variables from '../variables';

export const card = css`
  background-color: white;
  ${box.shadow()};
  border-radius: ${variables.XS};
`;

export const ripple = css`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, gray 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(15, 15);
    opacity: 0;
    transition: transform 0.5s, opacity 500ms;
  }
  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;
