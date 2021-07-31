import { render, screen } from '@testing-library/react';
import Chart from '../Chart';

jest.mock('../../utils/dataTransformation', () => ({
  getAggregatedData: () => [{
    clicks: 543592,
    date: '01.01.2020',
    impressions: 2574,
  },
  {
    clicks: 1000,
    date: '02.01.2020',
    impressions: 2112,
  },
  {
    clicks: 123,
    date: '01.02.2020',
    impressions: 3422,
  },
  {
    clicks: 4342,
    date: '03.03.2020',
    impressions: 5664,
  },
  {
    clicks: 5435435,
    date: '04.05.2020',
    impressions: 24324,
  }],
}));

describe('Chart component', () => {
  const filtersMock = {
    datasources: [],
    campaigns: [],
  };

  it('should render with main elements correctly', () => {
    const { asFragment } = render(<Chart data={[]} filters={filtersMock} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display active filters', () => {
    render(<Chart data={[]} filters={{ ...filtersMock, campaigns: ['C1'] }} />);
    expect(screen.getByText('All Datasources; Campaign "C1"')).toBeInTheDocument();
  });
});
