import React from 'react';
import "../styles/Results.css"
import Recipe from "./Recipe"

const Results = (props) => {

		return (
			<div className="results">
					<h2 className="you-could"> You could make...</h2>
					<div className="results-cards">
						{props.results && props.results.length > 0 ? props.results.map((result, id) => (
							<Recipe key={id} recipe={result} />
						)) : <div className="error"></div>}
					</div>
                    <div className="back-btn"><button onClick={props.backToIngredients}>Try some new ingredients</button></div>
				</div>
		);
	}

export default Results;