import React, { Component } from 'react';
import { getPlacePhotoUrl } from '../utils/utils';
import './places.scss'

export class Places extends Component {
	constructor(props) {
		super(props)
	}

	createPlace(place) {
		return (
			<div key={place.id} className='place-container'>
				<div className='image-container'>
					<img src={getPlacePhotoUrl(place.photos[0].photo_reference, 400, 267)} />
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