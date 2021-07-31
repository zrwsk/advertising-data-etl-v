import { chain, sumBy } from 'lodash';
import { IAdDataEntity, IFilters } from '../types';

export const getFilterOptions = (
  data: IAdDataEntity[],
  key: keyof IAdDataEntity,
): (string | number)[] => chain(data)
  .map((dataPoint) => dataPoint[key])
  .uniq()
  .value();

const includesOrEmpty = <T>(arr: T[], item: T) => (arr.length > 0 ? arr.includes(item) : true);

export const getAggregatedData = (
  data: IAdDataEntity[],
  filters: IFilters,
): Pick<IAdDataEntity, 'date' | 'clicks' | 'impressions'>[] => chain(data)
  .filter(({ datasource, campaign }) => includesOrEmpty(filters.datasources, datasource)
    && includesOrEmpty(filters.campaigns, campaign))
  .groupBy((dataPoint) => dataPoint.date)
  .map((group, key) => ({
    date: key,
    clicks: sumBy(group, 'clicks'),
    impressions: sumBy(group, 'impressions'),
  }))
  .sortBy((dataPoint) => dataPoint.date?.split('.').reverse().join(''))
  .value();
