import { render, screen, waitFor } from '@testing-library/react';
import Affix from '..';

describe('Test cases for Affix.component.jsx', () => {
  function setup(rest) {
    const defaultPros = {
      children: <button type="button">120px to affix top</button>,
    };
    return render(<Affix {...defaultPros} {...rest} />);
  }
  it('should render Affix with button props', () => {
    setup();
    expect(screen.getByText('120px to affix top')).toBeInTheDocument();
  });
  it('should check Callback with affixed state', async () => {
    const checkfn = jest.fn();
    setup({ offsetTop: 120, onAffixedChange: checkfn });
    await waitFor(() => expect(checkfn).toHaveBeenCalled());
  });
});
