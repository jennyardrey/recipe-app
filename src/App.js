import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from "./Components/Header";
import IngredientsForm from "./Components/IngredientsForm";
import Results from "./Components/Results";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ing1: "",
			ing2: "",
			ing3: "",
			ing4: "",
			ingredients: [],
			diet: "",
			results: [],
			showResults: false
		}
		this.handleDiet.bind(this)

	}
	handleChange1 = (event) => {
		event.preventDefault();
		this.setState({
			ing1: event.target.value
		})
	}
	handleChange2 = (event) => {
		event.preventDefault();
		this.setState({
			ing2: event.target.value
		})
	}
	handleChange3 = (event) => {
		event.preventDefault();
		this.setState({
			ing3: event.target.value
		})
	}
	handleChange4 = (event) => {
		event.preventDefault();
		this.setState({
			ing4: event.target.value
		})
	}
	handleDiet = (event) => {
		this.setState({
			diet: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		Axios.get(`https://api.spoonacular.com/recipes/search?query=${this.state.ing2}&query=${this.state.ing1}?query=${this.state.ing3}?query=${this.state.ing4}&number=5&diet=${this.state.diet}&sort=random&apiKey=b8cf9c64b44b4e76b8fcfae4cc3f45f7`)
			.then(response => {
				this.setState({ results: response.data.results })
				this.setState({isResults : true})
			})
	}
	backToIngredients = () => {
		this.setState({isResults : false})
	}




	render() {
		return (
			<div className="app">
				<Header />
				{this.state.isResults ? <Results results={this.state.results} backToIngredients={this.backToIngredients}/> : <IngredientsForm results={this.state.results} submitForm={this.handleSubmit} handleChange1={this.handleChange1} handleChange2={this.handleChange2} handleChange3={this.handleChange3} handleChange4={this.handleChange4} handleDiet={this.handleDiet} />}
				
				
			</div>
		);
	}
}

export default App;