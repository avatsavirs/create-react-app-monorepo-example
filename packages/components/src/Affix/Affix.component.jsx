/**
 * Created By: NaveenPantra
 * Created On: Thu Jun 18 2020
 */
 import React from 'react';
import PropTypes from 'prop-types';
import  Affix  from 'antd/lib/affix';
import  'antd/lib/affix/style/css';

function AffixComponent({
  offsetBottom,
  offsetTop,
  children,
  onAffixedChange,
  target,
}) {
  return (
    <Affix
      offsetBottom={offsetBottom}
      offsetTop={offsetTop}
      target={target}
      onChange={onAffixedChange}
    >
      {children}
    </Affix>
  );
}

AffixComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  offsetTop: PropTypes.number,
  offsetBottom: PropTypes.number,
  onAffixedChange: PropTypes.func,
  target: PropTypes.func,
};

AffixComponent.defaultProps = {
  children: '',
  onAffixedChange: () => {},
  offsetTop: 0,
  offsetBottom: undefined,
  target: () => window,
};

export default AffixComponent;
