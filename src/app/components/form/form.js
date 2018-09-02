import React, { Component } from 'react';
import './form.scss'
import { languages, place_types } from '../../config/config.json'

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: '',
			language: languages[0].value,
			opennow: false,
			type: place_types[0].value,
		};

		this.handleChange = this.handleChange.bind(this);
		this.sendQuery = this.sendQuery.bind(this);
	}

	sendQuery() {
		this.props.sendQuery(this.state);
	}

	handleChange(event) {
		const id = event.target.id;
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState({ [id]: value });
	}

	render() {
		return (
			<div id='form'>
				<div className='form-field'>
					<label htmlFor='keyword'>Place</label>
					<input id='keyword' type='text' onBlur={this.handleChange}></input>
				</div>
				<div className='form-field'>
					<label htmlFor='type'>Type</label>
					<select id='type' value={this.state.type} onChange={this.handleChange}>
						{place_types.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
					</select>
				</div>
				<div className='form-field'>
					<label htmlFor='language'>Language</label>
					<select id='language' value={this.state.language} onChange={this.handleChange}>
						{languages.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
					</select>
				</div>
				<div className='form-field'>
					<label htmlFor='opennow'>Open Now</label>
					<input id='opennow' checked={this.state.opennow} type='checkbox' onChange={this.handleChange}></input>
					<button onClick={this.sendQuery}>Search</button>
				</div>
			</div>
		);
	}
}