import PropTypes from 'prop-types';
import React from 'react';

import { AlertWrapper } from './Alert.styled';
import  Alert  from 'antd/lib/alert';
import  'antd/lib/alert/style/css';

function AppAlert({
  message,
  description,
  type,
  closable,
  action,
  onClose,
  className,
  showIcon,
  icon,
  styles,
}) {
  return (
    <AlertWrapper className={className} styles={styles}>
      <Alert
        message={message}
        description={description}
        type={type}
        closable={closable}
        onClose={onClose}
        showIcon={showIcon}
        action={action}
        icon={icon}
      />
    </AlertWrapper>
  );
}

AppAlert.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  closable: PropTypes.bool,
  showIcon: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func,
  action: PropTypes.node,
  icon: PropTypes.node,
  styles: PropTypes.shape({
    alert: PropTypes.array,
    action: PropTypes.array,
    successAlert: PropTypes.array,
  }),
};
AppAlert.defaultProps = {
  closable: false,
  onClose: () => {},
  type: 'error',
  description: '',
  className: '',
  showIcon: true,
  action: undefined,
  icon: undefined,
  styles: {},
};

export default AppAlert;
