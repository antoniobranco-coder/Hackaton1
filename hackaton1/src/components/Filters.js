import React from 'react';

function Filters(props) {
	return (
		<div className="Filters">
			<form>
				<select name="country" value={props.selectedCountry} onChange={props.handleChange}>
					<option>Please select a country....</option>
					{props.listCountries.map((country) => <option>{country}</option>)}
					))}
				</select>
			</form>
		</div>
	);
}

export default Filters;
