// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mocking recharts. From the tests perspective, the most important information is
// if the data points are correct. This implemenation supports it, by displaying data.
jest.mock('recharts', () => ({
  LineChart: ({ data }: { data: Record<string, string | number>[] }) => <ul data-testid="chart-data">{data.map((v) => <li key={v.date}>{`${v.date}, ${v.clicks}, ${v.impressions}`}</li>)}</ul>,
  CartesianGrid: () => null,
  XAxis: () => null,
  YAxis: () => null,
  Legend: () => null,
  Line: () => null,
  ResponsiveContainer: ({ children }) => children,
}));
