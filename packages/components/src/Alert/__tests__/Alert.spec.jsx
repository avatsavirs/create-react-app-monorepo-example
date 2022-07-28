import { screen, render } from '@testing-library/react';
import { user } from '@healthifyme/test-utilities';
import Alert from '..';

describe('Test cases for Alert.component.jsx', () => {
  function setup(rest) {
    const defaultPros = {
      message: 'SuccessFully Passed',
      description: 'Your Test is successfully Passed',
      type: 'success',
      closable: true,
      showIcon: false,
      className: '',
    };
    return render(<Alert {...defaultPros} {...rest} />);
  }
  it('should render Alert with props', () => {
    setup();
    expect(screen.getByText('SuccessFully Passed')).toBeInTheDocument();
    expect(
      screen.getByText('Your Test is successfully Passed'),
    ).toBeInTheDocument();
  });
  it('should show close button icon', () => {
    setup({ showIcon: true });
    const button = screen.getByRole('button', { name: 'close' });
    expect(button).toBeInTheDocument();
  });
  it('should remove Alert by clicking on button', async () => {
    const checkfn = jest.fn();
    setup({ onClose: checkfn });
    const button = screen.getByRole('button');
    const text = screen.getByText('SuccessFully Passed');
    await user.click(button);
    expect(checkfn).toHaveBeenCalledTimes(1);
    expect(text).not.toBeInTheDocument();
  });
});
