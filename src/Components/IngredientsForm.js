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

				<button id="submit-btn" type="submit">Generate recipes...</button>

			</form>
			{props.results.length > 0 ?
				<Link
					activeClass="active"
					to="results"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				>
					<div className="results-scroll">...see your results!</div>
				</Link> : <div className="results-scroll">Awaiting ingredients...</div>}


		</div>
	);
}

export default IngredientsForm;