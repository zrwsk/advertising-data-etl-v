import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from "recharts";

const Chart = (): JSX.Element => {
  return (
    <LineChart width={730} height={250} data={[]}>
      <CartesianGrid vertical={false} />
      <XAxis />
      <YAxis />
      <Legend />
      <Line type="monotone" dataKey="Clicks" stroke="#8884d8" />
      <Line type="monotone" dataKey="Impressions" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;