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
			page : "enter"
		}

		this.nav = this.nav.bind(this);
		this.addGear = this.addGear.bind(this);
		this.fetchGear = this.fetchGear.bind(this);
		this.removeReservation = this.removeReservation.bind(this);

		this.fetchGear();
	}

	nav(page) {
		this.setState({
			page : page
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

		const {reservations,gear,page} = this.state;

		const ReservationEntries = reservations.map((reservation, index) => {
			return <ReservationEntry 
			key={reservation.id} 
			id={reservation.id} 
			edit={this.editReservation} 
			remove={this.removeReservation} 
			firstname={reservation.name} 
			lastname={reservation.attack} 
			number={reservation.defense}/>
		})

		const view = page == "enter" ? <EntryAdder onAdd={this.addGear}/> : <ViewDb gear={gear}/>;

		return (
			<MuiThemeProvider>
        		<div>
					<Header onNav={this.nav}/>
				  	{view}
			  	</div>
      		</MuiThemeProvider>
		)
	}
}
