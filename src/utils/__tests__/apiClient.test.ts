import { parse } from 'papaparse';
import { getAdvertisingData } from '../apiClient';

jest.mock('papaparse', () => ({
  parse: jest.fn(),
}));

describe('utils/apiClient', () => {
  describe('getAdvertisingData', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should resolve promise when request/parsing is completed', () => {
      expect.assertions(1);

      getAdvertisingData()
        .then((result) => {
          expect(result).toEqual([]);
        });
      const completeCb = (parse as jest.Mock).mock.calls[0][1].complete;
      completeCb({ data: [] });
    });

    it('should reject promise when request/parsing failed', () => {
      expect.assertions(1);

      getAdvertisingData()
        .catch((err) => {
          expect(err).toBe('Error message');
        });
      const errorCb = (parse as jest.Mock).mock.calls[0][1].error;
      errorCb(new Error('Error message'));
    });

    it('should transform headers to lowercase', () => {
      getAdvertisingData();
      const { transformHeader } = (parse as jest.Mock).mock.calls[0][1];

      expect(transformHeader('Header')).toBe('header');
    });

    it('should cast clicks and impressions values to numbers', () => {
      getAdvertisingData();
      const { transform } = (parse as jest.Mock).mock.calls[0][1];

      expect(transform('100', 'clicks')).toBe(100);
      expect(transform('123456', 'impressions')).toBe(123456);
      expect(transform('', 'impressions')).toBe(0);
    });

    it('should NOT cast values other than clicks & impressions', () => {
      getAdvertisingData();
      const { transform } = (parse as jest.Mock).mock.calls[0][1];

      expect(transform('19/01/2021', 'Date')).toBe('19/01/2021');
      expect(transform('DS', 'Datasource')).toBe('DS');
    });
  });
});
