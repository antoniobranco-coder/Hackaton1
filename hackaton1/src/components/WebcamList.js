import React from 'react';
import axios from 'axios';
import './WebcamList.css';
import { Button, Card } from 'react-bootstrap';

class WebcamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gotData: false,
      category: '',
      countryCodeSelected: '',
      countryNameSelected: '',
      totalCams: 0,
      getWebData: [],
    };
  }

  renderNewData = () => {
    const { selectedId, selectedCountry, selectedCategory } = this.props;
    const apiKey = `ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W`;
    let modifiers = ``;

    let smallCategory = selectedCategory.toString().toLowerCase();

    if (selectedId !== '' && selectedCategory !== '') {
      modifiers = `country=${selectedId}/category=${smallCategory}`;
    } else if (selectedId !== '') {
      modifiers = `country=${selectedId}`;
    } else {
      modifiers = `category=${smallCategory}`;
    }

    const url = `https://api.windy.com/api/webcams/v2/list/limit=50,0/${modifiers}?show=webcams:category,image,location,player,url;`;

    axios
      .get(url, { headers: { 'x-windy-key': apiKey } })
      .then((response) => response.data)
      .then((getData) => {
        this.setState({
          gotData: true,
          getWebData: getData.result.webcams,
          totalCams: getData.result.total,
          category: selectedCategory,
          countryCodeSelected: selectedId,
          countryNameSelected: selectedCountry,
        });
      });
  };

  componentDidUpdate = (prevProps) => {
    if (
      prevProps.selectedId !== this.props.selectedId ||
      prevProps.selectedCategory !== this.props.selectedCategory
    ) {
      this.renderNewData();
    }
  };

  componentDidMount = () => {};

  render() {
    const {
      countryNameSelected,
      getWebData,
      totalCams,
      category,
      gotData,
    } = this.state;

    return (
      <div className="WebcamList">
        {gotData && (
          <div>
            <div className="explore-title">
              Exploring:
              <span className="text">
                {countryNameSelected} {category}
              </span>
            </div>
            <div className="total-title">
              Total webcams: <span className="text">{totalCams}</span>
            </div>

            <div className="list">
              {getWebData.map((element, index) => (
                <Card className="card" key={index}>
                  <Card.Img variant="top" src={element.image.current.preview} />
                  <Card.Body className="card-body">
                    <Card.Title className="card-title" />
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
        )}
      </div>
    );
  }
}

export default WebcamList;
