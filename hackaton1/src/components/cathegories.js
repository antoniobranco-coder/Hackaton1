import React from "react";
import axios from "axios";

class Cathegories extends React.Component {
  constructor() {
    super();
    this.state = { categoriesName: [], filterArray : []};
  }

  componentDidMount = () => {
    const url = "https://api.windy.com/api/webcams/v2/list?show=categories";
    const apiKey = `ILGosuG9SzGiLAQHiZtnbF91oKhuVi0W`;

    axios
      .get(url, { headers: { "x-windy-key": apiKey } })
      .then((response) => response.data)
      .then((data) => {
        console.log(data.result.categories);
        let getName = data.result.categories.map((categorie) => categorie.name);
        console.log(getName);
        this.setState({
          categoriesName: getName,
        });
      });
  };
  handleChange(event) {
    
    let newValue = event.target.value;
    console.log(newValue)
    let isChecked = event.target.checked
    console.log(isChecked)

    const array = this.state.filterArray

    if (isChecked) {
       array.push(newValue)
       this.setState({
        filterArray : array })
      
       console.log(array)
    }

  }

  render() {
    return (
      <div className="category-checkbox">
        <div>
          {this.state.categoriesName.map((categorie) => (
            <div>
              <input
                id="name"
                value={categorie}
                type="checkbox"
                onClick={this.handleChange}
              />
              <label htmlFor="name">{categorie}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cathegories;
