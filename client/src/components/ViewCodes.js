import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ViewCodes extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			code: '',
			name: '',
			codes: props.codes
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			codes : nextProps.codes
		})
	}

	handleInputChange(event) {
		const target = event.target;

		this.setState({
			[target.name]: target.value
		})
	}

	handleSubmit(event) {
        var entry = this.state;
        
		console.log(entry);
		event.preventDefault();

		this.props.onAdd(entry);

		this.setState({ code:'', name:''});
    }
    
    render() {

		var fieldstyle = {
			fontFamily : "inherit",
			width : "calc(100% - 140px)"
		}

		const {codes,code,name} = this.state;

		const Codes = codes.map((code, index) => {
			return <div className="codes-row">
				<div className="codes-text">{code.name}</div>
				<div className="codes-text">{code.code}</div>
			</div>;
        });

        return(
			<div>
				<div className="f-row">
					<form className="f-col" style={{maxWidth:"500px"}} onSubmit={this.handleSubmit}>		
						<div className="entry-row">
							<div className="entry-label"><div>User Name</div></div>
							<TextField style={fieldstyle} name="name" onChange={this.handleInputChange} value={name} />
						</div><div className="entry-row">
							<div className="entry-label"><div>Code</div></div>
							<TextField style={fieldstyle} name="code" onChange={this.handleInputChange} value={code} />
						</div>
						<RaisedButton style={{ width: "100%", margin: "20px 20px 20px 0px" }} type="submit" label="Add Code" />
					</form>
				</div>
				<div className="codes-container">{Codes}</div>
			</div>
        )
    }
}