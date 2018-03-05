import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import EntryAdder from './components/EntryAdder';
import ViewDb from './components/ViewDb';
import ReservationEntry from './components/ReservationEntry';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			reservations : [],
			gear : [],
			orbs : [],
			page : "gear",
			nav : {
				"gear" : "lightgrey",
				"codes" : "lightgrey",
				"index" : "lightgrey"
			}
		}

		this.nav = this.nav.bind(this);
		this.addGear = this.addGear.bind(this);
		this.fetchGear = this.fetchGear.bind(this);
		this.removeReservation = this.removeReservation.bind(this);
	}

	componentDidMount() {
		this.fetchGear();
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

	editReservation(reservation) {
		axios.put('/reservation', {
			firstname: reservation.firstname,
			lastname: reservation.lastname,
			number: reservation.number,
			id: reservation.id
		})
		.then( (response) => {
			console.log(response);
			this.setState({
				reservations : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	removeReservation(res) {
		var reservations = this.state.reservations;
		
		var index = _.findIndex(reservations, function(o) { return o.id === res.id; });
		var uri = '/reservation/' + reservations[index].id;

		axios.delete(uri)
		.then( (response) => {
			console.log(response);
			this.setState({
				reservations : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const {gear,page,nav} = this.state;

		var view;

		switch(page) {
			case "gear":
				view = <EntryAdder onAdd={this.addGear}/>;
				break;
			case "index":
				view = <ViewDb gear={gear}/>;
				break;
			case "codes":
				view = <div>Codes</div>;
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
