import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import EntryAdder from './components/EntryAdder';
import ViewDb from './components/ViewDb';
import ViewCodes from './components/ViewCodes';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			reservations : [],
			gear : [],
			orbs : [],
			page : "gear",
			codes : [],
			nav : {
				"gear" : "lightgrey",
				"codes" : "lightgrey",
				"index" : "lightgrey"
			}
		}

		this.nav = this.nav.bind(this);
		this.addGear = this.addGear.bind(this);
		this.fetchGear = this.fetchGear.bind(this);
		this.addCode = this.addCode.bind(this);
		this.fetchCodes = this.fetchCodes.bind(this);
	}

	componentDidMount() {
		this.fetchGear();
		this.fetchCodes();
		this.nav("gear");
	}

	nav(page) {
		var newnav = { "gear" : "lightgrey", "codes" : "lightgrey", "index" : "lightgrey" };
		newnav[page] = "grey";

		this.setState({
			page : page,
			nav : newnav
		});
	}

	addGear(gear) {
		axios.post('/gear', gear)
		.then( (response) => {
			this.setState({
				gear : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	fetchGear() {
		axios.get('/gear')
		.then( (res) => {
			this.setState({
				gear : res.data
			})
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
			this.setState({
				codes : res.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const {gear,codes,page,nav} = this.state;

		var view;

		switch(page) {
			case "gear":
				view = <EntryAdder onAdd={this.addGear}/>;
				break;
			case "index":
				view = <ViewDb gear={gear}/>;
				break;
			case "codes":
				view = <ViewCodes codes={codes} onAdd={this.addCode}/>;
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