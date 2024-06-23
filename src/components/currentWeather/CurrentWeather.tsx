import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCurrentWeatherThunk } from "../../store/currentWeather/currentWeatherSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const CurrentWeather: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const currentWeather = useSelector(
    (state: RootState) => state.currentWeather.currentWeather
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCurrentWeatherThunk({
        lat: query.coordinates.lat,
        lon: query.coordinates.lng,
        units: "metric",
      })
    );
  }, [query]);

  return <>{JSON.stringify(currentWeather)}</>;
};

export default CurrentWeather;
