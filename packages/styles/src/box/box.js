import { css } from 'styled-components';
import utilities from '../utilities';

export const marginCenter = css`
  margin: 0 auto;
`;
export const marginRemove = css`
  margin: 0;
`;

export function margin(size = 'M', dir = null) {
  switch (dir) {
    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      return css`
            margin-${dir}: ${(props) =>
        utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
           `;
    case 'horizontal':
      return css`
        margin-left: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
        margin-right: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    case 'vertical':
      return css`
        margin-top: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
        margin-bottom: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    default:
      return css`
        margin: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
  }
}

export const paddingRemove = css`
  padding: 0;
`;

export function padding(size = 'M', dir = null) {
  switch (dir) {
    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      return css`
            padding-${dir}: ${(props) =>
        utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
           `;
    case 'horizontal':
      return css`
        padding-left: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
        padding-right: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    case 'vertical':
      return css`
        padding-top: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
        padding-bottom: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
    default:
      return css`
        padding: ${(props) =>
          utilities.convertPxToEm(props.theme['base-font-size'], size, 'em')};
      `;
  }
}

export function shadow() {
  return css`
    ${(props) => `box-shadow: 0px 3px 6px ${props.theme['shadow-color']}`};
  `;
}

export function bgColor(backgroundColor) {
  return css`
    ${(props) => `background-color: ${props.theme[backgroundColor]}`}
  `;
}

export const properties = css`
  ${({ $margin }) => ($margin ? margin($margin) : '')};
  ${({ $marginHorizontal }) =>
    $marginHorizontal ? margin($marginHorizontal, 'horizontal') : ''};
  ${({ $marginVertical }) =>
    $marginVertical ? margin($marginVertical, 'vertical') : ''};
  ${({ $marginTop }) => ($marginTop ? margin($marginTop, 'top') : '')};
  ${({ $marginBottom }) =>
    $marginBottom ? margin($marginBottom, 'bottom') : ''};
  ${({ $marginLeft }) => ($marginLeft ? margin($marginLeft, 'left') : '')};
  ${({ $marginRight }) => ($marginRight ? margin($marginRight, 'right') : '')};
  ${({ $padding }) => ($padding ? padding($padding) : '')};
  ${({ $paddingHorizontal }) =>
    $paddingHorizontal ? padding($paddingHorizontal, 'horizontal') : ''};
  ${({ $paddingVertical }) =>
    $paddingVertical ? padding($paddingVertical, 'vertical') : ''};
  ${({ $paddingTop }) => ($paddingTop ? padding($paddingTop, 'top') : '')};
  ${({ $paddingBottom }) =>
    $paddingBottom ? padding($paddingBottom, 'bottom') : ''};
  ${({ $paddingLeft }) => ($paddingLeft ? padding($paddingLeft, 'left') : '')};
  ${({ $paddingRight }) =>
    $paddingRight ? padding($paddingRight, 'right') : ''};
  ${({ $bgColor }) => ($bgColor ? bgColor($bgColor) : '')};
`;
