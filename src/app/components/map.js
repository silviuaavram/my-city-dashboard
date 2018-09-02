import * as React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { api_key } from '../config/config.json'
import './map.scss'

const styles = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        containerStyle={styles}
        initialCenter={this.props.initialCenter}
        center={this.props.center}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (api_key)
})(MapContainer)