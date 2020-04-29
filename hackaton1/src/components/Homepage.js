import React from 'react';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getDataCategories: [],
			getDataCountries: []
		};
	}

	componentDidMount = () => {
		const path = `list?show=countries`;
		const url = `https://api.windy.com/api/webcams/v2/${path}`;

		axios.get(url).then((response) => response.data).then((getDataCountries) => {
			console.log(getDataCountries);
		});
	};

	render() {
		return (
			<div className="Homepage">
				<h1>Homepage</h1>
				<Filters />
			</div>
		);
	}
}

export default Homepage;
