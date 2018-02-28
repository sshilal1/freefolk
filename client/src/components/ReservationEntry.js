import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class ReservationEntry extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname : props.firstname,
			lastname : props.lastname,
			number : props.number,
			id : props.id,
			edit : false
		}

		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleRemove() {
		var res = this.props;
		this.props.remove(res);
	}

	handleEdit() {
		this.setState({
			edit: true
		})
	}

	handleInputChange(event) {
		const target = event.target;
		this.setState({
			[target.name] : target.value
		})
	}

	handleSubmitEdit(event) {
		var entry = Object.assign({}, this.state);
    console.log(entry);
    event.preventDefault();

    this.setState({
			edit: false
		})

    this.props.edit(entry);
  }

	render() {

		var style = {
			padding: "10px",
			margin: "5px",
			width: "100px",
			display: "inline-block"
		}

		var {edit,firstname,lastname,number} = this.state;

		if (edit) {
			return (
				<li>
					<input name="firstname" style={style} onChange={this.handleInputChange} value={firstname}></input>
					<input name="lastname" style={style} onChange={this.handleInputChange} value={lastname}></input>
					<input name="number" style={style} onChange={this.handleInputChange} value={number}></input>
					<RaisedButton onClick={this.handleSubmitEdit}>Ok</RaisedButton>
				</li>
			)
		}

		else {
			return (
				<li>
					<div style={style}>{this.state.firstname}</div>
					<div style={style}>{this.state.lastname}</div>
					<div style={style}>{this.state.number}</div>
					<RaisedButton onClick={this.handleRemove}>Delete</RaisedButton>
					<RaisedButton onClick={this.handleEdit}>Edit</RaisedButton>
				</li>
			)
		}
	}
}