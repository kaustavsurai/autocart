import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJsfdZJRGPRn522INajExXLZjajibfM_E&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 22.719568, lng: 75.857727 }}>
    <Marker position={{ lat: 22.719568, lng: 75.857727 }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = () => [
 
  <MyMapComponent key="map" />
];

export default enhance(ReactGoogleMaps);