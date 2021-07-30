import Paper from '@material-ui/core/Paper'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const Filters = (): JSX.Element => {

  return (
    <Paper>
      <Autocomplete
        multiple
        limitTags={4}
        options={[]}
        getOptionLabel={(a) => 'd'}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Datasource" placeholder="Select datasources..." />
        )}
      />
      <Autocomplete
        multiple
        limitTags={4}
        options={[]}
        getOptionLabel={(a) => 'd'}
        defaultValue={[]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Campaign" placeholder="Select campaigns..." />
        )}
      />
      <Button variant="contained" color="primary">Apply filters</Button>
    </Paper>
  );
};

export default Filters;