import React from 'react';

const Results = (props) => {
	const {
		recipe
	} = props;
	return (
		<div>
			<h2>You could make...</h2>
			<img src={recipe.image} alt="recipe" />
			<p>{recipe.title}</p>
			<h3>You have...</h3>
			{recipe.usedIngredients.map(ingredient => {
				return <div>{ingredient.name}</div>
			})}
			<h3>You need...</h3>
			{recipe.missedIngredients.map(ingredient => {
				return <div>{ingredient.name}</div>
			})}
		</div>
	);
}

export default Results;