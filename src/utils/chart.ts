import { IFilters } from '../types';

const getFilterOptionsText = (options: (string | number)[]) => options.map((o) => `"${o}"`).join(', ').replace(/, ([^,]*)$/, ' and $1');

export const getHeadingText = ({ datasources, campaigns }: IFilters): string => {
  const datasourcesText = datasources.length > 0 ? `Datasource ${getFilterOptionsText(datasources)}` : 'All Datasources';
  const campaignsText = campaigns.length > 0 ? `Campaign ${getFilterOptionsText(campaigns)}` : 'All Campaigns';

  return `${datasourcesText}; ${campaignsText}`;
};

export const formatYAxisTick = (v: unknown): string => (typeof v === 'number' && v > 10000 ? `${Math.round(v / 1000)}k` : String(v));
