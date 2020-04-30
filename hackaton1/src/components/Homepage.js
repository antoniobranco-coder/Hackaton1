import React from 'react';
import Filters from './Filters';
import axios from 'axios';
import './Homepage.css';
import WebcamList from './WebcamList';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getDataCategories: [],
      getDataCountries: [],
      selectedCountry: '',
      selectedCategory: '',
      getDataCodeCountriesAllInfo: [],
      selectedId: '',
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
        let getCountries = getDataCountries.result.countries.map(
          (country) => country.name,
        );
        let getCountriesAllInfo = getDataCountries.result.countries;
        this.setState({
          getDataCountries: getCountries,
          getDataCodeCountriesAllInfo: getCountriesAllInfo,
        });
      });

    const pathCategories = `list?show=categories`;
    const urlCategories = `https://api.windy.com/api/webcams/v2/${pathCategories}`;

    axios
      .get(urlCategories, { headers: { 'x-windy-key': apiKey } })
      .then((response) => response.data)
      .then((getDataCategories) => {
        let getCategories = getDataCategories.result.categories.map(
          (category) => category.name,
        );
        this.setState({ getDataCategories: getCategories });
      });
  };

  handleChangeCountry = (event) => {
    event.preventDefault();
    let countryName = event.target.value;
    let countryData = this.state.getDataCountries.filter(
      (element) => element === countryName,
    );
    let countryId = this.state.getDataCodeCountriesAllInfo.filter(
      (element) => element.name === countryName,
    );

    this.setState({
      selectedCountry: countryData,
      selectedId: countryId[0].id,
    });
  };

  handleChangeCategory = (event) => {
    event.preventDefault();
    let categoryName = event.target.value;
    let categoryData = this.state.getDataCategories.filter(
      (element) => element === categoryName,
    );
    this.setState({
      selectedCategory: categoryData,
    });
  };

  handleCountryId = (id) => {
    let getDataCountries = this.getDataCountries;
    getDataCountries.map(() => {});
  };

  render() {
    return (
      <div className="Homepage">
        <div>
          <div className="main-title">Take a Look</div>
          <div className="welcome-title">
            <div className="welcome-text">
              Do you want to virtually travel the world or see if a specific
              place is crowded ? Take a look and explore the world from your
              couch!
            </div>
          </div>
          <div>
            <Filters
              className="filters"
              selectedCountry={this.state.selectedCountry}
              handleChangeCountry={this.handleChangeCountry}
              listCountries={this.state.getDataCountries}
              selectedCategory={this.state.selectedCategory}
              handleChangeCategory={this.handleChangeCategory}
              listCategories={this.state.getDataCategories}
            />
          </div>
          <div>
            <img
              className="photo"
              src="https://imgur.com/wOn2YH9.png"
              alt="photo"
            />
          </div>
          <div>
            <WebcamList
              selectedCategory={this.state.selectedCategory}
              selectedCountry={this.state.selectedCountry}
              selectedId={this.state.selectedId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
