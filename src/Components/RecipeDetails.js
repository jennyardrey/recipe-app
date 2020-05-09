import React from 'react';

const RecipeDetails = (props) => {

	return (
		<div>
			<p>{props.details.instructions}</p>
		</div>
	);
}

export default RecipeDetails;