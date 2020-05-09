import React, { Component } from 'react';
import Axios from 'axios'
import RecipeDetails from './RecipeDetails';

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipeId: this.props.recipe.id,
			recipeDetails: [],
			popup: false
		}

	}
	componentDidMount() {
		Axios.get(`https://api.spoonacular.com/recipes/${this.state.recipeId}/information?includeNutrition=false&apiKey=b8cf9c64b44b4e76b8fcfae4cc3f45f7`)
			.then(response => {
				this.setState({ recipeDetails: response.data })
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
			<div>
				<h2>You could make...</h2>
				<img src={this.props.recipe.image} alt="recipe" />
				<p>{this.props.recipe.title}</p>
				<h3>You have...</h3>
				{this.props.recipe.usedIngredients.map(ingredient => {
					return <div>{ingredient.name}</div>
				})}
				<h3>You need...</h3>
				{this.props.recipe.missedIngredients.map(ingredient => {
					return <div>{ingredient.name}</div>
				})}
				{this.state.popup === false ? <button onClick={this.seeMore}>Show instructions</button> : <button onClick={this.seeLess}>Hide instructions</button>}



				{this.state.popup === true ? <RecipeDetails details={this.state.recipeDetails} /> : null}
			</div>
		);

	}
}

export default Results;