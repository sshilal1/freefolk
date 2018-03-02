import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EntryAdder extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			health: '',
			attack: '',
			defense: '',
			magic: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;

		this.setState({
			[target.name]: target.value
		})
	}

	handleSubmit(event) {
		var newId = shortid.generate();
		var entry = Object.assign({}, this.state, { id: newId });

		console.log(entry);
		event.preventDefault();

		this.props.onAdd(entry);
		console.log(this);
	}

	render() {

		var fieldstyle = {
			fontFamily : "inherit",
			maxWidth : "256px",
			width : "inherit"
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="entry-row">
						<div className="entry-label"><div>Item Name</div></div>
						<TextField style={fieldstyle} name="name" onChange={this.handleInputChange} />
					</div><div className="entry-row">
						<div className="entry-label"><div>Health</div></div>
						<TextField style={fieldstyle} name="health" onChange={this.handleInputChange} />
					</div><div className="entry-row">
						<div className="entry-label"><div>Attack</div></div>
						<TextField style={fieldstyle} name="attack" onChange={this.handleInputChange} />
					</div><div className="entry-row">
						<div className="entry-label"><div>Defense</div></div>
						<TextField style={fieldstyle} name="defense" onChange={this.handleInputChange} />
					</div><div className="entry-row">
						<div className="entry-label"><div>Magic</div></div>
						<TextField style={fieldstyle} name="magic" onChange={this.handleInputChange} />
					</div>
					<RaisedButton style={{ width: "calc(100% - 40px)", margin: "20px" }} type="submit" label="Add Gear" />
				</form>
			</div>
		)
	}
}