import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import ViewAdder from './pages/ViewAdder';
import ViewCalc from './pages/ViewCalc';
import ViewGear from './pages/ViewGear';
import ViewCodes from './pages/ViewCodes';

const init = {
	"gear" : "lightgrey",
	"codes" : "lightgrey",
	"index" : "lightgrey",
	"calc" : "lightgrey"
};

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			gear : [],
			orbs : [],
			codes : [],
			sortedGears : {},
			page : "",
			nav : init
		}

		this.nav = this.nav.bind(this);
		this.addGear = this.addGear.bind(this);
		this.fetchGear = this.fetchGear.bind(this);
		this.addCode = this.addCode.bind(this);
		this.fetchCodes = this.fetchCodes.bind(this);
		this.setGear = this.setGear.bind(this);
	}

	componentDidMount() {
		this.fetchGear();
		//this.fetchCodes();
		this.nav("codes");
	}

	nav(page) {
		var newnav = Object.assign({}, init);
		newnav[page] = "grey";

		this.setState({
			page : page,
			nav : newnav
		});
	}

	addGear(gear) {
		axios.post('/gear', gear)
		.then( (response) => {
			this.setGear(response.data)
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	fetchGear() {
		axios.get('/gear')
		.then( (res) => {
			console.log("success gear");
			this.setGear(res.data)
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	addCode(gear) {
		axios.post('/code', gear)
		.then( (response) => {
			this.setState({
				codes : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	fetchCodes() {
		axios.get('/codes')
		.then( (res) => {
			console.log("success codes");
			this.setState({
				codes : res.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	setGear(gear) {
		this.setState({
			gear: gear,
			sortedGears : _.groupBy(gear, "gearClass")
		});
	}

	render() {

		const {gear,codes,page,nav,sortedGears} = this.state;

		var view;

		switch(page) {
			case "gear":
				view = <ViewAdder onAdd={this.addGear}/>;
				break;
			case "index":
				view = <ViewGear gear={gear} sortedGears={sortedGears}/>;
				break;
			case "codes":
				view = <ViewCodes codes={codes} onAdd={this.addCode}/>;
				break;
			case "calc":
				view = <ViewCalc sortedGears={sortedGears}/>;
				break;
			default:
				view = <ViewGear gear={gear} sortedGears={sortedGears}/>;
				break;
		}

		return (
			<MuiThemeProvider>
        		<div>
					<Header onNav={this.nav} nav={nav}/>
				  	{view}
			  	</div>
      		</MuiThemeProvider>
		)
	}
}