import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { api_key } from '../config/config.json'
import './map.scss'

const styles = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: -1
    };
  }

  createMarker(place, index) {
    return (
      <Marker
        key={place.id}
        name={place.name}
        position={place.geometry.location}
        onClick={() => {
          this.setState({ activeIndex: index });
        }}
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
        visible={this.state.activeIndex == index}>
        <div>
          <h1>{place.name}</h1>
        </div>
      </InfoWindow>
    );
  }

  createMapPlace(place, index) {
    const Marker = this.createMarker(place, index);
    const Window = this.createInfoWindow(place, index);

    return { Marker, Window };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        containerStyle={styles}
        initialCenter={this.props.initialCenter}
        onClick={() => {
          this.setState({ activeIndex: -1 });
        }}
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