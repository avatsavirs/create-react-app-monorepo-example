import { Button } from 'antd';
import Affix from '.';

export default {
  title: 'UI Components/Affix',
  component: Affix,
};

function Template(args) {
  return <Affix {...args} />;
}

export const setToTop = Template.bind({});
setToTop.args = {
  offsetTop: 20,
  children: [<Button>Click Me</Button>],
};

export const setToBottom = Template.bind({});
setToBottom.args = {
  offsetBottom: 20,
  children: [<Button>Click Me</Button>],
};
