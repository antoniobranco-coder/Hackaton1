import React from 'react';
import axios from 'axios';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getData: [],
    };
  }

  componentDidMount = () => {
    const apiKey = `ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W`;
    const pathCountries = `list?show=countries`;
    const pathCategories = `list?show=categories`;
    const url = `https://api.windy.com/api/webcams/v2/${pathCountries}`;

    axios
      .get(url, { headers: { 'x-windy-key': apiKey } })
      .then((response) => response.data)
      .then((getData) => {
        console.log(getData);
      });
  };

  render() {
    return (
      <div className="Homepage">
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default Homepage;
