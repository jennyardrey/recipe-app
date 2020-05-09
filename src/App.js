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
			results: []
		}
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
	handleSubmit = (event) => {
		event.preventDefault();
		Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ing1},+${this.state.ing2}&number=5&apiKey=b8cf9c64b44b4e76b8fcfae4cc3f45f7`)
			.then(response => {
				this.setState({ results: response.data })
				console.log(this.state.results)
			})
		// .catch(console.log("err"))
	}


	render() {
		return (
			<div className="app">
				<Header />
				<IngredientsForm results={this.state.results} submitForm={this.handleSubmit} handleChange1={this.handleChange1} handleChange2={this.handleChange2} />
				<div>
					{this.state.results && this.state.results.length > 0 ? this.state.results.map(result => (
						<Results recipe={result} />
					)) : <div className="error">Error</div>}
				</div>
			</div>
		);
	}
}

export default App;