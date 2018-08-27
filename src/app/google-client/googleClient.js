import { api_key } from '../config/config.json'

export class Client {
	constructor() {
    this.getPlaces();
  }
  
  getLocation() {
    const url = new URL('https://www.googleapis.com/geolocation/v1/geolocate');
    url.searchParams.append('key', api_key);

    return fetch(url, { method: 'POST' })
    .then(response => response.json())
    .catch(error => {
      console.error(`[Client] getLocation() ${error}`)
    });
  }

  getPlaces({ location, radius = 1000, ...optional } = {}) {
    const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
    const promise = location ? new Promise(resolve => resolve(location)) : this.getLocation();
    url.searchParams.append('key', api_key);
    url.searchParams.append('radius', radius);

    return promise
    .then(location => {
      url.searchParams.append('location', `${location.location.lat},${location.location.lng}`);

      return fetch(url, { method: 'POST' });
    })
    .then(response => response.json())
    .then(places => console.log(places))
    .catch(error => {
      console.error(`[Client] getPlaces() ${error}`)
    });
  }
}
