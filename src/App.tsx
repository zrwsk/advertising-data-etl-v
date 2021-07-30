import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Filters from './components/Filters'
import Chart from './components/Chart'

const App = (): JSX.Element => {
  return (
    <Box m={4}>
      <Typography variant="h3" component="h1">Advertising Data ETL-V</Typography>
      <Filters />
      <Chart />
    </Box>
  );
};

export default App;
