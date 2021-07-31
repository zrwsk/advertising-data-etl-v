import { getFilterOptions, getAggregatedData } from '../dataTransformation';
import mockData from '../../__fixtures__/mockData';

describe('utils.dataTransformation', () => {
  describe('getFilterOptions', () => {
    it('should return all unique values', () => {
      expect(getFilterOptions(mockData, 'datasource')).toEqual(['D1', 'D3', 'D6', 'D2']);
    });
  });

  describe('aggregateData', () => {
    it('should return data aggregated by date', () => {
      expect(getAggregatedData(mockData, { datasources: [], campaigns: [] })).toEqual([{
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
      }]);
    });

    it('should return data filtered by datasources', () => {
      expect(getAggregatedData(mockData, { datasources: ['D6'], campaigns: [] })).toEqual([{
        clicks: 5435435,
        date: '04.05.2020',
        impressions: 24324,
      }]);
    });

    it('should return data filtered by campaigns', () => {
      expect(getAggregatedData(mockData, { datasources: [], campaigns: ['C2'] })).toEqual([{
        clicks: 1000,
        date: '02.01.2020',
        impressions: 2112,
      }, {
        clicks: 123,
        date: '01.02.2020',
        impressions: 3422,
      }]);
    });

    it('should return data filtered by campaigns & datasources', () => {
      expect(getAggregatedData(mockData, { datasources: ['D3'], campaigns: ['C2'] })).toEqual([{
        clicks: 1000,
        date: '02.01.2020',
        impressions: 2112,
      }]);
    });
  });
});
