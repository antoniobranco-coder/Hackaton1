import React from 'react';
import axios from 'axios';
import './WebcamList.css';
import { Button, Card } from 'react-bootstrap';

class WebcamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCodeSelected: 'PT',
      countryNameSelected: 'Portugal',
      totalCams: 146,
      getWebData: [],
    };
  }

  componentDidMount = () => {
    const apiKey = `ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W`;
    const { countryCodeSelected } = this.state;
    let offset = 0;
    const url = `https://api.windy.com/api/webcams/v2/list/limit=50,${offset}/country=${countryCodeSelected}?show=webcams:category,image,location,player,url;`;

    axios
      .get(url, { headers: { 'x-windy-key': apiKey } })
      .then((response) => response.data)
      .then((getData) => {
        console.log('PT', getData.result);

        let data = getData.result.webcams;
        this.setState({ getWebData: data });
      });
  };

  render() {
    const { countryNameSelected, getWebData, totalCams } = this.state;

    console.log(getWebData);

    return (
      <div className="WebcamList">
        <div className="explore-title">~ Exploring: {countryNameSelected}</div>
        <div className="total-title">~ Total webcams: {totalCams}</div>
        <div>FILTERS HERE</div>
        <div className="list">
          {getWebData.map((element, index) => (
            <Card className="card" key={index}>
              <Card.Img variant="top" src={element.image.current.preview} />
              <Card.Body className="card-body">
                <Card.Title className="card-title"></Card.Title>
                <Button
                  className="button"
                  size="sm"
                  href={element.url.current.mobile}
                  target="blank_"
                >
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
