import { Box } from "@material-ui/core";
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, ResponsiveContainer } from "recharts";

const Chart = (): JSX.Element => {
  return (
    <Box mt={4} pr={8}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={[]}>
          <CartesianGrid vertical={false} />
          <XAxis />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="Clicks" stroke="#8884d8" />
          <Line type="monotone" dataKey="Impressions" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Chart;