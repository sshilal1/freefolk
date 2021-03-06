import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Clipboard from 'react-clipboard.js';

export default class ViewCodes extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			code: '',
			name: '',
			codes: []
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	copyText(id) {
		var range = document.createRange();
		range.selectNode(document.getElementById(id));
		window.getSelection().addRange(range);
		document.execCommand("copy");
	}

	handleInputChange(event) {
		const target = event.target;

		this.setState({
			[target.name]: target.value
		})
	}

	handleSubmit(event) {

		const {code, name} = this.state;

    var entry = {
			code : code,
			name : name
		};
        
		console.log(entry);
		event.preventDefault();

		if (code === '' || name === '') {
			alert('Please fill in both fields');
    }

    else {
    	this.props.onAdd(entry);
			this.setState({ code:'', name:''});
    }
  }
    
    render() {

		var fieldstyle = {
			fontFamily : "inherit",
			width : "calc(100% - 140px)"
		}

		const {code,name} = this.state;

		const Codes = this.props.codes.map((c) => {
			return <div className="codes-row">
				<div className="codes-text">{c.name}</div>
				<div id={c.code} className="codes-text">{c.code}</div>
				<Clipboard data-clipboard-text={c.code}>
					Copy
				</Clipboard>
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