import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ViewCodes extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			code: '',
			name: '',
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
        var entry = this.state;
        
		console.log(entry);
		event.preventDefault();

		this.props.onAdd(entry);
    }
    
    render() {
        return(
            <div className="f-row">
				<form className="f-col" style={{maxWidth:"500px"}} onSubmit={this.handleSubmit}>		
					<div className="entry-row" style={{paddingTop:"20px",paddingBottom:"5px"}}>
                        <div className="entry-label"><div>User Name</div></div>
						<TextField style={fieldstyle} name="name" onChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}