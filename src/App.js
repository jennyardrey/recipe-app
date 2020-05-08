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
			ingredients: [],
			results: []
		}
	}
	handleChange1 = (event) => {
		event.preventDefault();
		this.setState({
			ing1: event.target.value
		})
		console.log(this.state.ing1)
	}
	handleChange2 = (event) => {
		event.preventDefault();
		this.setState({
			ing2: event.target.value
		})
		console.log(this.state.ing2)
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
			<div>
				<Header />
				<IngredientsForm submitForm={this.handleSubmit} handleChange1={this.handleChange1} handleChange2={this.handleChange2} />
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