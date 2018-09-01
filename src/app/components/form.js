import React, { Component } from 'react';
import InputRange from 'react-input-range';
import Switch from 'react-switch';
import Select from 'react-select'
import inputRangeStyles from 'react-input-range/lib/css/index.css'
import './form.scss'

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: 'dded',
			language: '',
			price: {
				min: 0,
				max: 4
			},
			opennow: false,
			type: '',
			pagetoken: ''
		};
	}

	render() {
		const options = [
			{ value: 'chocolate', label: 'Chocolate' },
			{ value: 'strawberry', label: 'Strawberry' },
			{ value: 'vanilla', label: 'Vanilla' }
		]
		return (
			<div id="form">
				<div className="form-field">
					<label htmlFor="keyword">Place</label>
					<input id="keyword" type="text" value={this.state.keyword} onChange={value => this.setState({ keyword: value })}></input>
				</div>
				<div className="form-field">
					<label htmlFor="type">Type</label>
					<Select
						id="type"
						options={options}
						onChange={value => this.setState({ type: value })}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="price">Price</label>
					<InputRange
						id="price"
						styles={inputRangeStyles}
						maxValue={4}
						minValue={0}
						value={this.state.price}
						onChange={value => this.setState({ price: value })} />
				</div>
				<div className="form-field">
					<label htmlFor="opennow">Open Now</label>
					<Switch
						checked={this.state.opennow}
						id="opennow"
						onChange={value => this.setState({ opennow: value })}
					/>
				</div>
			</div>
		);
	}
}