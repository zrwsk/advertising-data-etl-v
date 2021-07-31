import {
  render, screen, waitForElementToBeRemoved, fireEvent,
} from '@testing-library/react';
import App from '../App';
import * as apiClient from '../utils/apiClient';
import mockData from '../__fixtures__/mockData';

describe('App component', () => {
  beforeEach(() => {
    jest.spyOn(apiClient, 'getAdvertisingData').mockResolvedValue(mockData);
  });

  it('should show loader when data is loading', async () => {
    render(<App />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    // after rerender progressbar should disappear
    expect(await screen.findByRole('progressbar')).not.toBeInTheDocument();
  });

  it('should show error if data can not be loaded', async () => {
    (apiClient.getAdvertisingData as jest.Mock).mockRejectedValueOnce('message');
    render(<App />);

    expect(await screen.findByText('Error while fetching the data')).toBeInTheDocument();
  });

  it('should show all the data', async () => {
    render(<App />);

    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expect(screen.getByTestId('chart-data')).toMatchSnapshot();
    expect(screen.getByText('All Datasources; All Campaigns')).toBeInTheDocument();
  });

  it('should show filtered data', async () => {
    render(<App />);

    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    fireEvent.click(screen.getAllByTitle('Open')[0]);
    fireEvent.click(screen.getByText('D1'));
    fireEvent.click(screen.getAllByTitle('Open')[1]);
    fireEvent.click(screen.getByText('C2'));
    fireEvent.click(screen.getByText('Apply'));

    expect(screen.getByTestId('chart-data')).toMatchSnapshot();
    expect(screen.getByText('Datasource "D1"; Campaign "C2"')).toBeInTheDocument();
  });
});
