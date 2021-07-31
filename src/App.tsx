import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Filters from './components/Filters';
import Chart from './components/Chart';
import { getAdvertisingData } from './utils/apiClient';
import { LoadingStates } from './enums';
import { IAdDataEntity } from './types';
import LoadingManager from './components/LoadingManager';

const App = (): JSX.Element => {
  const [data, setData] = useState<IAdDataEntity[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingStates>(LoadingStates.IDLE);

  useEffect(() => {
    setLoadingState(LoadingStates.FETCHING);

    getAdvertisingData()
      .then((v) => {
        setData(v);
        setLoadingState(LoadingStates.FULFILLED);
      })
      .catch(() => {
        setLoadingState(LoadingStates.ERROR);
      });
  }, []);

  return (
    <>
      <LoadingManager loadingState={loadingState} />
      <Box m={4}>
        <Typography variant="h3" component="h1" gutterBottom>Advertising Data ETL-V</Typography>
        <Filters />
        <Chart />
      </Box>
    </>
  );
};

export default App;
