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

		var style = {
			padding: "10px",
			margin: "5px",
			width: "100px",
			display: "inline-block"
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label style={style}>Name</label>
						<TextField style={style} name="name" onChange={this.handleInputChange} />
					</div><div>
						<label style={style}>Health</label>
						<TextField style={style} name="health" onChange={this.handleInputChange} />
					</div><div>
						<label style={style}>Attack</label>
						<TextField style={style} name="attack" onChange={this.handleInputChange} />
					</div><div>
						<label style={style}>Defense</label>
						<TextField style={style} name="defense" onChange={this.handleInputChange} />
					</div><div>
						<label style={style}>Magic</label>
						<TextField style={style} name="magic" onChange={this.handleInputChange} />
					</div>
					<RaisedButton style={{ width: "260px" }} type="submit" label="Add Gear" />
				</form>
			</div>
		)
	}
}