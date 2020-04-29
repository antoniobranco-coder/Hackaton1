import React from 'react';
import Filters from './Filters';
import axios from 'axios';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getDataCategories: [],
			getDataCountries: [],
			selectedCountry: ''
		};
	}

	componentDidMount = () => {
		const path = `list?show=countries`;
		const url = `https://api.windy.com/api/webcams/v2/${path}`;
		const apiKey = 'ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W';

		axios
			.get(url, { headers: { 'x-windy-key': apiKey } })
			.then((response) => response.data)
			.then((getDataCountries) => {
				let getCountries = getDataCountries.result.countries.map((country) => country.name);
				this.setState({ getDataCountries: getCountries });
			});
	};

	handleChange = (event) => {
		event.preventDefault();
		let countryName = event.target.value;
		let countryData = this.state.getDataCountries.filter((element) => element === countryName);
		this.setState({
			selectedCountry: countryData
		});
	};

	render() {
		return (
			<div className="Homepage">
				{/* <h1>{this.state.getDataCountries}</h1> */}
				<Filters
					selectedCountry={this.state.selectedCountry}
					handleChange={this.handleChange}
					listCountries={this.state.getDataCountries}
				/>
			</div>
		);
	}
}

export default Homepage;
