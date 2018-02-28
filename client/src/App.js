import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import _ from 'lodash';
import axios from 'axios';

import EntryAdder from './components/EntryAdder';
import ReservationEntry from './components/ReservationEntry';

	var ID = function () {
	  return '_' + Math.random().toString(36).substr(2, 9);
	};

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			reservations : []
		}
		this.addReservation = this.addReservation.bind(this);
		this.removeReservation = this.removeReservation.bind(this);
	}

	addReservation(reservation) {
		axios.post('/reservation', {
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
		
		var index = _.findIndex(reservations, function(o) { return o.id == res.id; });
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

		const {reservations} = this.state;

		const ReservationEntries = reservations.map((reservation, index) => {
			return <ReservationEntry key={reservation.id} id={reservation.id} edit={this.editReservation} remove={this.removeReservation} firstname={reservation.firstname} lastname={reservation.lastname} number={reservation.number}/>
		})

		return (
			<MuiThemeProvider>
        <div>
				  <EntryAdder onAdd={this.addReservation}/>
				  <ol>{ReservationEntries}</ol>
			  </div>
      </MuiThemeProvider>
		)
	}
}
