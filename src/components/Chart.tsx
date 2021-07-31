import { useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, ResponsiveContainer,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';
import { getAggregatedData } from '../utils/dataTransformation';
import { getHeadingText, formatYAxisTick } from '../utils/chart';
import { IAdDataEntity, IFilters } from '../types';

type P = {
  data: IAdDataEntity[],
  filters: IFilters,
};

const Chart = ({ data, filters }: P): JSX.Element => {
  const chartData = useMemo(() => getAggregatedData(data, filters), [data, filters]);
  const axisDomain: AxisDomain = [0, (dataMax: number) => Math.round(dataMax * 1.1)];

  return (
    <Box mt={4}>
      <Typography variant="h6" component="h2" gutterBottom>{getHeadingText(filters)}</Typography>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={chartData}
          margin={{
            top: 0, left: 40, right: 40, bottom: 80,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" angle={-45} dy={30} />
          <YAxis
            yAxisId="left"
            label={{
              value: 'Clicks', angle: -90, position: 'insideLeft', dx: -30,
            }}
            domain={axisDomain}
            tickFormatter={formatYAxisTick}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: 'Impressions', angle: 90, position: 'insideRight', dx: 30,
            }}
            domain={axisDomain}
            tickFormatter={formatYAxisTick}
          />
          <Legend
            wrapperStyle={{
              bottom: 0,
            }}
          />
          <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" dot={false} />
          <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#82ca9d" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;
