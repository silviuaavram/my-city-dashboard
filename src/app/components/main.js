import React, { Component } from 'react';
import { Places } from './places';
import { Form } from './form/form';
import Map from './map';
import './main.scss'
import Client from '../services/google-client/googleClient'

export class Main extends Component {
	constructor(props) {
		super(props)

		this.state = {
			places: [],
			center: {}
		}
	}

	sendQuery(searchParams) {
		Client.getPlaces({
			location: this.state.center,
			radius: 1000,
			keyword: searchParams.keyword,
			language: searchParams.language,
			opennow: searchParams.opennow,
			type: searchParams.type
		}).then(newPlaces => {
			this.setState({ places: newPlaces });
		});

	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(location => {
			this.setState({
				center: {
					lat: location.coords.latitude,
					lng: location.coords.longitude
				}
			})
		});
	}

	render() {
		const initialCenter = {
			lat: 50.0480923,
			lng: 14.457385599999997
		}

		return (
			<main>
				<div id="map">
					<Map places={this.state.places} center={this.state.center} initialCenter={initialCenter} />
				</div>
				<Form sendQuery={searchParams => this.sendQuery(searchParams)} />
				<Places places={this.state.places} />
			</main>
		);
	}
}