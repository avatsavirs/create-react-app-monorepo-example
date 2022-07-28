import Badge from '.';

export default {
  title: 'UI Components/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
};

function Template(args) {
  return <Badge {...args} />;
}

export const Color = Template.bind({});
Color.args = {
  color: '#faad14',
};

export const Count = Template.bind({});
Count.args = {
  count: 100,
};
