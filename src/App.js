import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from "./Components/Header"
import IngredientsForm from "./Components/IngredientsForm"
import Results from "./Components/Results"

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
			results: []
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
		console.log(this.state.diet)
		this.setState({
			diet: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		Axios.get(`https://api.spoonacular.com/recipes/search?query=${this.state.ing2}&query=${this.state.ing1}?query=${this.state.ing3}?query=${this.state.ing4}&number=5&diet=${this.state.diet}&sort=random&apiKey=b8cf9c64b44b4e76b8fcfae4cc3f45f7`)
			.then(response => {
				this.setState({ results: response.data.results })
				console.log(this.state.results)
			})
		// .catch(console.log("err"))
	}


	render() {
		return (
			<div className="app">
				<Header />
				<IngredientsForm results={this.state.results} submitForm={this.handleSubmit} handleChange1={this.handleChange1} handleChange2={this.handleChange2} handleChange3={this.handleChange3} handleChange4={this.handleChange4} handleDiet={this.handleDiet} />
				<div className="results">
					<h2 className="you-could"> You could make...</h2>
					<div className="results-cards">
						{this.state.results && this.state.results.length > 0 ? this.state.results.map(result => (
							<Results recipe={result} />
						)) : <div className="error"></div>}
					</div>
				</div>
			</div>
		);
	}
}

export default App;