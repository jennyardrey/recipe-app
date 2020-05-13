import React from 'react';
import "../styles/RecipeDetails.css"

const RecipeDetails = (props) => {


	return (
		<div className="detail-outer" >
			<div className="detail-inner">
				<span onClick={props.seeLess} class="close">&times;</span>
				<img src={props.details.image} alt="recipe" />
				<h3>{props.details.title}</h3>
				<div>
					{props.details.diets.map(diet => { return <div>{diet} <i class="fas fa-check"></i></div> })}
				</div>

				{/* <h3>Instructions:</h3><span className="instructions">{props.details.instructions}</span> */}
				<a href={props.details.sourceUrl} alt="recipe link" target="_blank">Click here to open recipe in a new tab</a>
			</div>
		</div >
	);
}

export default RecipeDetails;