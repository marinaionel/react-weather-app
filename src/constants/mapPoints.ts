export interface MapPoint {
  coordinates: { lng: number; lat: number };
  description: string;
  tz: string;
}

const mapPoints: MapPoint[] = [
  {
    coordinates: { lng: 12.56, lat: 55.67 },
    description: "Copenhagen, Denmark",
    tz: "Europe/Copenhagen",
  },
  {
    coordinates: { lng: -122.414, lat: 37.776 },
    description: "San Francisco, California",
    tz: "America/Los_Angeles",
  },
  {
    coordinates: { lng: 2.3522, lat: 48.8566 },
    description: "Paris, France",
    tz: "Europe/Paris",
  },
  {
    coordinates: { lng: 13.405, lat: 52.52 },
    description: "Berlin, Germany",
    tz: "Europe/Berlin",
  },
  {
    coordinates: { lng: -0.1276, lat: 51.5074 },
    description: "London, United Kingdom",
    tz: "Europe/London",
  },
  {
    coordinates: { lng: 14.5058, lat: 46.0569 },
    description: "Ljubljana, Slovenia",
    tz: "Europe/Ljubljana",
  },
  {
    coordinates: { lng: 19.0402, lat: 47.4979 },
    description: "Budapest, Hungary",
    tz: "Europe/Budapest",
  },
  {
    coordinates: { lng: 16.3738, lat: 48.2082 },
    description: "Vienna, Austria",
    tz: "Europe/Vienna",
  },
  {
    coordinates: { lng: 18.0686, lat: 59.3293 },
    description: "Stockholm, Sweden",
    tz: "Europe/Stockholm",
  },
  {
    coordinates: { lng: 24.7535, lat: 59.437 },
    description: "Tallinn, Estonia",
    tz: "Europe/Tallinn",
  },
];

export default mapPoints;
