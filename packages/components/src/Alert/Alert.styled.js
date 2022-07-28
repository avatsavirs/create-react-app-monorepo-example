import styled from 'styled-components';
import { box } from '@pkg/styles';

export const AlertWrapper = styled.div`
  ${box.margin('l', 'vertical')}
  &&& {
    .ant-alert-success {
      ${(props) => props.styles.successAlert}
    }
    .ant-alert {
      ${(props) => props.styles.alert}
      .ant-alert-action {
        ${(props) => props.styles.action}
      }
      .ant-alert-icon {
        ${(props) => props.styles.icon}
      }
    }
  }
`;

export default AlertWrapper;
