import styled from 'styled-components';
import Badge from 'antd/lib/badge';
import  'antd/lib/badge/style/index';

export const StyledBadge = styled(Badge)`
  &&& {
    ${(props) => props.$styles.root}
    .ant-badge-status-dot {
      ${(props) => props.$styles.statusDot}
    }
  }
`;
