import React from 'react';
import './Filters.css';

function Filters(props) {
  return (
    <div>
      <div className="countryTitle">Where do you wanna go?</div>
      <form className="form-div">
        <table>
          <tr>
            <td>
              <select
                className="Filters"
                name="country"
                value={props.selectedCountry}
                onChange={props.handleChangeCountry}
              >
                <option className="Filters">Please select a country....</option>
                {props.listCountries.map((country) => (
                  <option className="Filters">{country}</option>
                ))}
                ))}
              </select>
            </td>
            <td>
              <select
                className="Filters"
                name="category"
                value={props.selectedCategory}
                onChange={props.handleChangeCategory}
              >
                <option className="Filters">
                  Please select a cam category....
                </option>
                {props.listCategories.map((category) => (
                  <option className="Filters">{category}</option>
                ))}
                ))}
              </select>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Filters;
