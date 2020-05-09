import React from 'react';
import '../styles/IngredientsForm.css'

const IngredientsForm = (props) => {
	return (
		<div id="ingredients-input">
			<p className="desc2">To start, enter some ingredients below.</p>
			<form onSubmit={props.submitForm} className="ingredients-form">
				<input onChange={props.handleChange1} type="text" className="ingredients-input" placeholder="Type ingredients"></input>
				<input onChange={props.handleChange2} type="text" className="ingredients-input" placeholder="Type ingredients"></input>
				<input type="submit"></input>
			</form>
		</div>
	);
}

export default IngredientsForm;