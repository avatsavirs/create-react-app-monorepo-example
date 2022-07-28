import Button from '.';

export default {
  title: 'UI Components/Alert',
  component: Button,
};

function Template(args) {
  return <Button {...args} />;
}

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'Info Alert',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'Success Alert',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'Warning Alert',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'Error Alert',
};
