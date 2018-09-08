import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { api_key } from '../../config/config.json'
import './map.scss'

const styles = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onMapClick = this.onMapClick.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  createMarker(place, index) {
    return (
      <Marker
        key={place.id}
        name={place.name}
        position={place.geometry.location}
        onClick={evt => this.onMarkerClick(index)}
        icon={{
          url: place.icon,
          scaledSize: new google.maps.Size(24, 24)
        }}
      />
    );
  }

  createInfoWindow(place, index) {
    return (
      <InfoWindow
        key={place.id}
        position={place.geometry.location}
        visible={this.props.activeIndex == index}>
        <div>
          <h4>{place.name}</h4>
        </div>
      </InfoWindow>
    );
  }

  onMapClick() {
    this.props.onActiveIndexChanged(-1);
  }

  onMarkerClick(index) {
    this.props.onActiveIndexChanged(index);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        containerStyle={styles}
        initialCenter={this.props.initialCenter}
        onClick={this.onMapClick}
        center={this.props.center}>
        {this.props.places.map((place, index) => this.createMarker(place, index))}
        {this.props.places.map((place, index) => this.createInfoWindow(place, index))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (api_key)
})(MapContainer)