import { getHeadingText, formatYAxisTick } from '../chart';

describe('utils/chart', () => {
  describe('getHeadingText', () => {
    it('should return "All Datasources" and "All campaigns" if filters not applied', () => {
      expect(getHeadingText({ datasources: [], campaigns: [] })).toBe('All Datasources; All Campaigns')
    });

    it('should list of datasources and campaigns if selected', () => {
      expect(getHeadingText({ datasources: ['A', 'B'], campaigns: ['C', 'D', 'E'] })).toBe('Datasource "A" and "B"; Campaign "C", "D" and "E"');
    });
  });

  describe('formatYAxisTick', () => {
    it('should shorten thousands when number is higher than 10000', () => {
      expect(formatYAxisTick(122000)).toBe('122k');
    });

    it('should return unchanged value if value <= 10000', () => {
      expect(formatYAxisTick(1000)).toBe('1000');
    });
  });
});
