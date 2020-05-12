import React, { Component } from 'react';
import Axios from 'axios'
import RecipeDetails from './RecipeDetails';
import "../styles/Results.css"

class Results extends Component {
	constructor(props) {
		super(props);
		this.image = "https://spoonacular.com/recipeImages/" + this.props.recipe.image;
		this.state = {
			recipeId: this.props.recipe.id,
			recipeDetails: [],
			popup: false,
		}

	}
	componentDidMount() {
		Axios.get(`https://api.spoonacular.com/recipes/${this.state.recipeId}/information?includeNutrition=false&apiKey=b8cf9c64b44b4e76b8fcfae4cc3f45f7`)
			.then(response => {
				this.setState({ recipeDetails: response.data })
				console.log.apply(this.state.recipeDetails)
			})
	}
	seeMore = () => {

		this.setState({
			popup: true
		})
	}
	seeLess = () => {
		this.setState({
			popup: false
		})
	}


	render() {
		return (
			<div id="results">

				<img src={this.image} alt="recipe" />
				<h2>{this.props.recipe.title}</h2>
				{/* <div>
					{this.state.recipeDetails.map(ingredient => { return <div>{ingredient.extendedIngredients.name} </div> })}
				</div> */}
				{this.state.popup === false ? <button onClick={this.seeMore}>More info</button> : null}



				{this.state.popup === true ? <RecipeDetails seeLess={this.seeLess} details={this.state.recipeDetails} /> : null}
			</div>
		);

	}
}

export default Results;