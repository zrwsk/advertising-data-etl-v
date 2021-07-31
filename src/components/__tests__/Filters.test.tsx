import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../Filters';

jest.mock('../../utils/dataTransformation', () => ({
  getFilterOptions: (_: unknown, key: string) => {
    if (key === 'datasource') {
      return ['D1', 'D2', 'D3'];
    }

    if (key === 'campaign') {
      return ['C1', 'C2', 'C3'];
    }

    return [];
  },
}));

describe('Filters component', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with main elements', () => {
    render(<Filters data={[]} />);
    // Datasources input
    expect(screen.getByPlaceholderText('Select datasources...')).toBeInTheDocument();
    // Campaigns input
    expect(screen.getByPlaceholderText('Select campaigns...')).toBeInTheDocument();
    // Apply button
    expect(screen.getByText('Apply')).toBeInTheDocument();
  });

  it('should call onChange when filters are applied', async () => {
    render(<Filters data={[]} onChange={onChangeMock} />);

    fireEvent.click(screen.getAllByTitle('Open')[0]);
    fireEvent.click(screen.getByText('D1'));
    fireEvent.click(screen.getAllByTitle('Open')[1]);
    fireEvent.click(screen.getByText('C2'));
    fireEvent.click(screen.getByText('Apply'));

    expect(onChangeMock).toHaveBeenCalledWith({
      datasources: ['D1'],
      campaigns: ['C2'],
    });
  });
});
