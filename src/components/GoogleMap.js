import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.237049,
      lng: 21.017532,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80%", width: "90%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={52.237049} lng={21.017532} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>{/* <h1>{this.state.selectedPlace.name}</h1> */}</div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
// })(MapContainer);
