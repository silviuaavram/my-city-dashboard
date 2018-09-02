import React, { Component } from 'react';
import { Places } from './places';
import { Form } from './form/form';
import Map from './map';
import './main.scss'

export class Main extends Component {
	constructor(props) {
		super(props)

		this.state = { places: [] }
	}

	setPlaces(newPlaces) {
		this.setState({ places: newPlaces });
	}

	sendQuery(searchParams) {
		console.log(searchParams)
		// search places
		const newPlaces = []
		this.setPlaces(newPlaces)
	}

	render() {
		return (
			<main>
				<div id="map">
					<Map places={this.state.places} />
				</div>
				<Form sendQuery={searchParams => this.sendQuery(searchParams)} />
				<Places places={this.state.places} />
			</main>
		);
	}
}