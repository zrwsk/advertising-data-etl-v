import { useMemo, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { IAdDataEntity, IFilters } from '../types';
import { getFilterOptions } from '../utils/dataTransformation';

type P = {
  data: IAdDataEntity[],
  onChange?: (selectedFilters: IFilters) => void,
}

const Filters = ({ data, onChange = () => undefined }: P): JSX.Element => {
  const datasourceOptions = useMemo(() => getFilterOptions(data, 'datasource'), [data]);
  const campaignOptions = useMemo(() => getFilterOptions(data, 'campaign'), [data]);
  const [activeDatasources, setActiveDatasources] = useState<(string | number)[]>([]);
  const [activeCampaigns, setActiveCampaigns] = useState<(string | number)[]>([]);
  const handleClick = () => {
    onChange({
      datasources: activeDatasources,
      campaigns: activeCampaigns,
    });
  };

  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Autocomplete
              multiple
              size="small"
              limitTags={4}
              options={datasourceOptions}
              onChange={(event, value) => setActiveDatasources(value)}
              value={activeDatasources}
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
              options={campaignOptions}
              onChange={(event, value) => setActiveCampaigns(value)}
              value={activeCampaigns}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Campaign" placeholder="Select campaigns..." />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" color="primary" onClick={handleClick} fullWidth>Apply</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Filters;
