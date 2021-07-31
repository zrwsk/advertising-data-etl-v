import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/styles';
import { LoadingStates } from '../enums';

const useStyles = makeStyles({
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
});

type P = {
  loadingState?: LoadingStates,
}

const LoadingManager = ({ loadingState = LoadingStates.IDLE }: P): JSX.Element | null => {
  const styles = useStyles();

  if (loadingState === LoadingStates.ERROR) {
    return (
      <Snackbar open>
        <Alert severity="error">
          Error while fetching the data
        </Alert>
      </Snackbar>
    );
  }

  if (loadingState === LoadingStates.FETCHING) {
    return (
      <LinearProgress classes={{ root: styles.loader }} />
    );
  }

  return null;
};

export default LoadingManager;
