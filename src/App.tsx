import React from "react";
import "./App.css";
import MapContainer from "./containers/mapContainer/MapContainer";
import { Container, Grid } from "@mui/joy";
import Search from "./components/search/Search";
import CurrentWeatherContainer from "./containers/currentWeatherContainer/CurrentWeatherContainer";

const App: React.FC = () => {
  return (
    <Container
      sx={{
        maxWidth: { md: "95%" },
        width: "100%",
        height: "100%",
        marginTop: "1rem",
      }}
    >
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Search />
        </Grid>

        <Grid xs={6}>
          <MapContainer />
        </Grid>

        <Grid xs={6}>
          <CurrentWeatherContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
