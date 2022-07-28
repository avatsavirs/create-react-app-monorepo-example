import PropTypes from 'prop-types';
import { StyledBadge } from './Badge.styled';
import React from 'react';

function AppBadge({
  color,
  count,
  dot,
  overflowCount,
  showZero,
  title,
  className,
  status,
  styles,
}) {
  return (
    <StyledBadge
      color={color}
      count={count}
      dot={dot}
      overflowCount={overflowCount}
      showZero={showZero}
      title={title}
      className={className}
      status={status}
      $styles={styles}
    />
  );
}
AppBadge.defaultProps = {
  color: undefined,
  count: undefined,
  dot: false,
  overflowCount: 99,
  showZero: false,
  title: '',
  className: '',
  status: undefined,
  styles: {},
};
AppBadge.propTypes = {
  color: PropTypes.oneOf([
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ]),
  count: PropTypes.number,
  dot: PropTypes.bool,
  overflowCount: PropTypes.number,
  showZero: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.oneOf([
    'success',
    'processing',
    'default',
    'error',
    'warning',
  ]),
  styles: PropTypes.shape({
    root: PropTypes.array,
    statusDot: PropTypes.array,
  }),
};

export default AppBadge;
