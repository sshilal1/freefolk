import React from 'react';
import shortid from 'shortid';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

export default class ViewAdder extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			class: '',
			name: '',
			health: '',
			attack: '',
			defense: '',
			magic: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		
		this.setState({ class: '', name: '', health: '', attack: '', defense: '', magic: ''});
	}

	handleChange(e,i,v) {
		this.setState({ class: v})
	}

	render() {

		var fieldstyle = {
			fontFamily : "inherit",
			width : "calc(100% - 140px)"
		}

		return (
			<div className="f-row">
				<form className="f-col" style={{maxWidth:"500px"}} onSubmit={this.handleSubmit}>		
					<div className="entry-row" style={{paddingTop:"20px",paddingBottom:"5px"}}>
						<div className="entry-label"><div>Class</div></div>
						<DropDownMenu
						style={fieldstyle} 
						value={this.state.class} 
						onChange={this.handleChange} 
						underlineStyle={{margin:0}}
						labelStyle={{paddingLeft:0}}>
							<MenuItem value={"Main Hand"} primaryText="Main Hand" />
							<MenuItem value={"Off Hand"} primaryText="Off Hand" />
							<MenuItem value={"Helmet"} primaryText="Helmet" />
							<MenuItem value={"Armor"} primaryText="Armor" />
							<MenuItem value={"Gloves"} primaryText="Gloves" />
							<MenuItem value={"Boots"} primaryText="Boots" />
							<MenuItem value={"Pendant"} primaryText="Pendant" />
							<MenuItem value={"Ring"} primaryText="Ring" />
							<MenuItem value={"Talisman"} primaryText="Talisman" />
						</DropDownMenu>
					</div><div className="entry-row">
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
					<RaisedButton style={{ width: "100%", margin: "20px 20px 20px 0px" }} type="submit" label="Add Gear" />
				</form>
			</div>
		)
	}
}