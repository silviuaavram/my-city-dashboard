import React, { Component } from 'react';
import Client from '../../services/google-client/googleClient'
import { getPlacePhotoUrl } from '../utils/utils';

export class PlaceDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: undefined
    };
  }

  componentDidMount() {
    Client.getPlaceDetails(this.props.place_id).then(placeDetails => {
      this.setState({ place: placeDetails.result });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.place.id === this.props.place.id) {
      return;
    }

    Client.getPlaceDetails(this.props.place_id).then(placeDetails => {
      this.setState({ place: placeDetails.result });
    });
  }

  returnRating(rating) {

  }

  render() {
    if (this.state.place === undefined) {
      return null;
    }

    const place = this.state.place;

    return (
      <div id='place-details'>
        <div id='photos-container'>
          {place.photos.slice(0, Math.min(6, place.photos.length)).map((photo, index) => (
            <img key={index} src={getPlacePhotoUrl(photo.photo_reference, 320)} />
          ))}
        </div>
        <div id='details'>
          <div id='basics'>
            <span>{place.name}</span>
            <span>{place.formatted_address}</span>
            <span>{place.international_phone_number}</span>
          </div>
          <div id='opening-hours'>
            {place.opening_hours.weekday_text.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div id='reviews'>
            {place.reviews.slice(0, Math.min(4, place.reviews.length)).map(review => (
              <div class='review'>
                <span class='review-author-name'>
                  {review.author_name}
                </span>
                <span class='review-rating'>
                  {Array.from({ length: review.rating }).map(() => (
                    <span>&#9733;</span>
                  ))}
                </span>
                <span class='review-text'>
                  {review.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}