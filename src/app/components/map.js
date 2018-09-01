import * as React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as config from '../config/config.json'
import './map.scss'

const styles = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} containerStyle={styles}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            {/* <h1>{this.state.selectedPlace.name}</h1> */}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (config.api_key)
})(MapContainer)