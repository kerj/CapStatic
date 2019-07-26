import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export class RideMap extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 45.515,
      lng: -122.679,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    console.log(position);
    
    return (
      <Map id="rideMap" center={position} zoom={this.state.zoom} scrollWheelZoom={true}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        />
        <Marker position={position}>
          <Popup>
            <span>Welcome to Portland! <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default RideMap