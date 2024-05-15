import React from 'react';
import '../styles/IngredientsForm.css'
import { Link } from "react-scroll";

const IngredientsForm = (props) => {
	return (
		<div id="ingredients-input">
			<p className="desc2">To start, enter some ingredients below.</p>
			<form onSubmit={props.submitForm} className="ingredients-form">
				<input onChange={props.handleChange1} type="text" className="ingredients-input" placeholder="Type ingredients..."></input>
				<input onChange={props.handleChange2} type="text" className="ingredients-input" placeholder="Type ingredients..."></input>
				<input onChange={props.handleChange3} type="text" className="ingredients-input" placeholder="Type ingredients..."></input>
				<input onChange={props.handleChange4} type="text" className="ingredients-input" placeholder="Type ingredients..."></input>

				<div className="diet-btns">
					<div className="diet-select" id="vegan-btn">
						<input type="radio" id="vegan" name="diet" value="vegan" onChange={props.handleDiet} />
						<label htmlFor="vegan">Vegan</label>

					</div>
					<div className="diet-select" id="gluten-free-btn">
						<input type="radio" id="gluten-free" name="diet" value="gluten free" onChange={props.handleDiet} />
						<label htmlFor="gluten-free">Gluten Free</label>

					</div>
					<div className="diet-select" id="vegetarian-btn">
						<input type="radio" id="vegetarian" name="diet" value="vegetarian" onChange={props.handleDiet} />
						<label htmlFor="vegetarian">Vegetarian</label>

					</div>
				</div>

				<button id="submit-btn" type="submit">Click here to generate recipes...</button>

			</form>
		</div>
	);
}

export default IngredientsForm;