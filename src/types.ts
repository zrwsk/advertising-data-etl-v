export interface IAdDataEntity {
  date: string,
  campaign: string,
  datasource: string,
  clicks: number,
  impressions: number,
}

export interface IFilters {
  datasources: (string | number)[],
  campaigns: (string | number)[],
}
