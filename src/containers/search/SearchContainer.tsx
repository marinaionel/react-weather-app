import { Autocomplete, Box, Radio, RadioGroup } from "@mui/joy";
import mapPoints from "../../constants/mapPoints";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setUnit } from "../../store/search/searchSlice";
import { RootState } from "../../store/store";
import { Unit } from "../../models/WeatherResponse";

const SearchContainer: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();
  const unit = useSelector((state: RootState) => state.search.unit);

  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUnit(event.target.value as Unit));
  };

  return (
    <Box>
      <Autocomplete
        options={mapPoints}
        getOptionLabel={(opt) => opt.description}
        value={query}
        onChange={(_, value) => value && dispatch(setQuery(value))}
      ></Autocomplete>
      <RadioGroup
        orientation="horizontal"
        value={unit}
        onChange={handleUnitChange}
        sx={{ my: 1 }}
      >
        <Radio value="metric" label="Metric" />
        <Radio value="standard" label="Standard" />
        <Radio value="imperial" label="Imperial" />
      </RadioGroup>
    </Box>
  );
};

export default SearchContainer;
