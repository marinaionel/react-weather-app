import { Autocomplete } from "@mui/joy";
import mapPoints from "../../constants/mapPoints";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../store/searchSlice";
import { RootState } from "../../store/store";

const Search: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();
  const options = mapPoints.map((val) => val.description);

  return (
    <Autocomplete
      options={options}
      value={query}
      onChange={(_, value) => value && dispatch(setQuery(value))}
    ></Autocomplete>
  );
};

export default Search;
