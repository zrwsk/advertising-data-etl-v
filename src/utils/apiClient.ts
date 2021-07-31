import { parse } from 'papaparse';
import { IAdDataEntity } from '../types';

const URL = 'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv';

export const getAdvertisingData = (): Promise<IAdDataEntity[]> => new Promise(
  (resolve, reject) => parse<IAdDataEntity>(URL, {
    header: true,
    download: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase(),
    // Papa parser has dynamic typing option, which works for the most of cases
    // but returns null for empty values. In our case we want explicitly
    // to have clicks and impressions as a number and in case of empty value it should be zero.
    transform: (value, field) => (['clicks', 'impressions'].includes(field as string) ? Number(value) : value),
    error: (err) => reject(err.message),
    complete: (result) => resolve(result.data),
  }),
);
