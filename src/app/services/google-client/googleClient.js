import { api_key } from '../../config/config.json'

export default class Client {
  static getLocation() {
    const url = new URL('https://www.googleapis.com/geolocation/v1/geolocate');
    url.searchParams.append('key', api_key);

    return fetch(url, { method: 'POST' })
      .then(response => response.json())
      .catch(error => {
        console.error(`[Client] getLocation() ${error}`)
      });
  }

  static getPlaces({ location, radius = 400, ...rest } = {}) {
    const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
    const promise = location ? new Promise(resolve => resolve(location)) : this.getLocation().then(location => location.location);
    url.searchParams.append('key', api_key);
    url.searchParams.append('radius', radius);

    Object.keys(rest).forEach(optional => {
      url.searchParams.append(optional, rest[optional]);
    });

    return promise
      .then(location => {
        url.searchParams.append('location', `${location.lat},${location.lng}`);

        return fetch(url, { method: 'POST' });
      })
      .then(response => response.json())
      .catch(error => {
        console.error(`[Client] getPlaces() ${error}`)
      });
  }
}
