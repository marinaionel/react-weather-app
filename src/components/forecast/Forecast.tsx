import React, { useEffect } from "react";
import { fetchForecast } from "../../store/forecast/forecastSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Forecast: React.FC = () => {
  const dispatch = useAppDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const unit = useSelector((state: RootState) => state.search.unit);

  useEffect(() => {
    dispatch(
      fetchForecast({
        lat: query.coordinates.lat,
        lon: query.coordinates.lng,
        units: unit,
      })
    );
  }, [query, unit]);

  return <></>;
};

export default Forecast;
