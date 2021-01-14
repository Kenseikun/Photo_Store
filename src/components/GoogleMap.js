import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      width: "0",
      height: "0",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",

      borderTop: "30px solid #ac003e",
    }}
  >
    {text}
  </div>
);

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
          <AnyReactComponent
            lat={52.237049}
            lng={21.017532}
            // text="I am here"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
