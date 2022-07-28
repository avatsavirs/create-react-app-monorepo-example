import { css } from 'styled-components';
import variables from '../variables';
import utilities from '../utilities';

export function getSize(baseSize, size) {
  return utilities.convertPxToEm(baseSize, size, 'rem');
}

export const size = (sizes = 'M') => {
  return css`
    font-size: ${(props) =>
      utilities.convertPxToEm(props.theme['font-size-base'], sizes, 'rem')};
  `;
};
export const align = (type) => {
  return css`
    text-align: ${type};
  `;
};

export const weight = (type) => {
  return css`
    font-weight: ${variables[`FONT_${type.toUpperCase()}`]};
  `;
};
export function replaceNbsps(str) {
  return str.replace(/\u00a0/g, ' ');
}
