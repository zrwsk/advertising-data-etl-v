import { render, screen } from '@testing-library/react';
import LoadingManager from '../LoadingManager';
import { LoadingStates } from '../../enums';

describe('LoadingManager component', () => {
  it('should return empty render by default', () => {
    const { container } = render(<LoadingManager />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render Loader when LoadingState is FETCHING', () => {
    render(<LoadingManager loadingState={LoadingStates.FETCHING} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render Alert when LoadingState is ERROR', () => {
    render(<LoadingManager loadingState={LoadingStates.ERROR} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
