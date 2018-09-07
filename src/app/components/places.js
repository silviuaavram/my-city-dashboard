import React, { Component } from 'react';
import { api_key } from '../config/config.json'

export class Places extends Component {
	constructor(props) {
		super(props)
	}

	getPlaceUrl(photoReference, width) {
		const url = new URL('https://maps.googleapis.com/maps/api/place/photo');
		url.searchParams.append('key', api_key);
		url.searchParams.append('photoreference', photoReference);
		url.searchParams.append('maxwidth', width);

		return url;
	}

	createPlace(place) {
		return (
			<div key={place.id} className='place-container'>
				<div className='image-container'>
					<img src={this.getPlaceUrl(place.photos[0].photo_reference, 320)} />
				</div>
				<div className='data-container'>
					<span>{place.name}</span>
					<span>{place.vicinity}</span>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div id='places'>
				{this.props.places.map(place => this.createPlace(place))}
			</div>
		);
	}
}