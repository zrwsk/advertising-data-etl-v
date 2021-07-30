import Paper from '@material-ui/core/Paper'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Filters = (): JSX.Element => {

  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Autocomplete
              multiple
              size="small"
              limitTags={4}
              options={[]}
              getOptionLabel={(a) => 'd'}
              defaultValue={[]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Datasource" placeholder="Select datasources..." />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Autocomplete
              multiple
              size="small"
              limitTags={4}
              options={[]}
              getOptionLabel={(a) => 'd'}
              defaultValue={[]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Campaign" placeholder="Select campaigns..." />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" color="primary" fullWidth>Apply</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Filters;