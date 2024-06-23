import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import MapContainer from "./components/mapContainer/MapContainer";
import { Container, Grid } from "@mui/joy";
import Search from "./components/search/Search";

function App() {
  return (
    <Container sx={{ maxWidth: { md: "95%" }, width: "100%", height: "100%", marginTop:'1rem' }}>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Search />
        </Grid>

        <Grid xs={6}>
          <MapContainer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
