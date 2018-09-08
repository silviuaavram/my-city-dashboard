import { api_key } from '../../config/config.json'

export const getPlacePhotoUrl = (photo_reference, width, height) => {
  const photoReference = photo_reference;
  const url = new URL('https://maps.googleapis.com/maps/api/place/photo');
  url.searchParams.append('key', api_key);
  url.searchParams.append('photoreference', photoReference);
  url.searchParams.append('maxwidth', width);
  url.searchParams.append('maxheight', height);

  return url;
}