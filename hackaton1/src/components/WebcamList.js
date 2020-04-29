import React from 'react';
import axios from 'axios';
import './WebcamList.css';
import { Button, Card } from 'react-bootstrap';

class WebcamList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: '',
			countryCodeSelected: '',
			countryNameSelected: '',
			totalCams: 0,
			getWebData: []
		};
	}

	componentDidMount = () => {
		const { selectedId, selectedCountry, selectedCategory } = this.props;
		const apiKey = `ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W`;
		const urlCountry = `https://api.windy.com/api/webcams/v2/list/limit=50,0/country=${selectedId}?show=webcams:category,image,location,player,url;`;
		const urlCategory = `https://api.windy.com/api/webcams/v2/list/limit=50,0/category=${selectedCategory}?show=webcams:category,image,location,player,url;`;
		const urlBoth = `https://api.windy.com/api/webcams/v2/list/limit=50,0/country=${selectedId}/category=${selectedCategory}/?show=webcams:category,image,location,player,url;`;
		let finalUrl = ``;

		if (selectedId !== '' && selectedCategory !== '') {
			finalUrl = urlBoth;
		} else if (countryCode !== '') {
			finalUrl = urlCountry;
		} else {
			finalUrl = urlCategory;
		}

		axios
			.get(finalUrl, { headers: { 'x-windy-key': apiKey } })
			.then((response) => response.data)
			.then((getData) => {
				console.log('PT', getData.result);

				this.setState({
					getWebData: getData.result.webcams,
					totalCams: getData.result.total,
					category: selectedCategory,
					countryCodeSelected: selectedId,
					countryNameSelected: selectedCountry
				});
			});
	};

	render() {
		const { countryNameSelected, getWebData, totalCams, category } = this.state;

		console.log(getWebData);

		return (
			<div className="WebcamList">
				<div className="explore-title">
					~ Exploring: {countryNameSelected} {category}
				</div>
				<div className="total-title">~ Total webcams: {totalCams}</div>
				<div>FILTERS HERE</div>
				<div className="list">
					{getWebData.map((element, index) => (
						<Card className="card" key={index}>
							<Card.Img variant="top" src={element.image.current.preview} />
							<Card.Body className="card-body">
								<Card.Title className="card-title" />
								<Button className="button" size="sm" href={element.url.current.mobile} target="blank_">
									{element.title}
								</Button>
							</Card.Body>
						</Card>
					))}
				</div>
			</div>
		);
	}
}

export default WebcamList;

// desktop: "https://www.windy.com/webcams/1190446271"
// mobile: "https://www.windy.com/webcams/1190446271"
// mobile: "https://www.windy.com/webcams/1190446271"
