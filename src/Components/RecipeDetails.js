import React from 'react';
import "../styles/RecipeDetails.css"

const RecipeDetails = (props) => {


	return (
		<div className="detail-outer" >
			<div className="detail-inner">
				<span onClick={props.seeLess} class="close">&times;</span>
				<div className="top-wrapper">
					<h3>{props.details.title}</h3>

					<img id="detail-img" src={props.details.image} alt="recipe" />
					<div className="details-info">
						{props.details.diets.map(diet => { return <div>{diet} <i class="fas fa-check"></i></div> })}
					</div>
					<h4>You'll need:</h4>
					<p>{props.details.extendedIngredients.map(ing => { return <div>{ing.name}</div> })}</p>

					<div className="ext-link">
						<a href={props.details.sourceUrl} alt="recipe link" target="_blank">Click here to go to recipe</a>
					</div>
				</div>
			</div>
		</div >
	);
}

export default RecipeDetails;