import React from 'react';
import Filters from './Filters';
import axios from 'axios';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getDataCategories: [],
			getDataCountries: [],
			selectedCountry: '',
			selectedCategory: ''
		};
	}

	componentDidMount = () => {
		const pathCountries = `list?show=countries`;
		const urlCountries = `https://api.windy.com/api/webcams/v2/${pathCountries}`;
		const apiKey = 'ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W';

		axios
			.get(urlCountries, { headers: { 'x-windy-key': apiKey } })
			.then((response) => response.data)
			.then((getDataCountries) => {
				let getCountries = getDataCountries.result.countries.map((country) => country.name);

				this.setState({ getDataCountries: getCountries });
			});

		const pathCategories = `list?show=categories`;
		const urlCategories = `https://api.windy.com/api/webcams/v2/${pathCategories}`;

		axios
			.get(urlCategories, { headers: { 'x-windy-key': apiKey } })
			.then((response) => response.data)
			.then((getDataCategories) => {
				console.log(getDataCategories);
				let getCategories = getDataCategories.result.categories.map((category) => category.name);

				this.setState({ getDataCategories: getCategories });
			});
	};

	handleChangeCountry = (event) => {
		event.preventDefault();
		let countryName = event.target.value;
		let countryData = this.state.getDataCountries.filter((element) => element === countryName);
		this.setState({
			selectedCountry: countryData
		});
	};

	handleChangeCategory = (event) => {
		event.preventDefault();
		let categoryName = event.target.value;
		let categoryData = this.state.getDataCategories.filter((element) => element === categoryName);
		this.setState({
			selectedCategory: categoryData
		});
	};

	render() {
		return (
			<div className="Homepage">
				<h1>{this.state.selectedCountry !== '' ? this.state.selectedCountry : <p>Select a country</p>}</h1>
				<Filters
					selectedCountry={this.state.selectedCountry}
					handleChangeCountry={this.handleChangeCountry}
					listCountries={this.state.getDataCountries}
					selectedCategory={this.state.selectedCategory}
					handleChangeCategory={this.handleChangeCategory}
					listCategories={this.state.getDataCategories}
				/>
			</div>
		);
	}
}

export default Homepage;
