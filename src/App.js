import React,{Component} from "react";
import Cardlist from "./Cardlist";
import {robots} from "./robots";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";

class App extends Component{
	constructor() {
		super()
		this.state={
			robots:[],
			Searchfield:" ",
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then (users=>{
			this.setState({robots:robots})
		})
		
	}
	Onsearchchange=(event)=>{

		this.setState({Searchfield:event.target.value})
		
	}

	render(){
		const filteredrobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
		})
		return (

		<div className="tc">
			<h1>Robot Friends</h1>
			<Searchbox searchChange={this.Onsearchchange}/>
			<Scroll>
				<Cardlist robots={filteredrobots}/>
			</Scroll>	
			</div>
			);

	}
	

	
}
export default App;