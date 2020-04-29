import React from 'react';

function Filters(props) {
	return (
		<div className="Filters">
			<form>
				<select name="country" value={props.selectedCountry} onChange={props.handleChangeCountry}>
					<option>Please select a country....</option>
					{props.listCountries.map((country) => <option>{country}</option>)}
					))}
				</select>
				<select name="category" value={props.selectedCategory} onChange={props.handleChangeCategory}>
					<option>Please select a cam category....</option>
					{props.listCategories.map((category) => <option>{category}</option>)}
					))}
				</select>
			</form>
		</div>
	);
}

export default Filters;
