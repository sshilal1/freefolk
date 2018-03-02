import React from 'react';
import logo from '../ql.logo.png';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends React.Component {

    constructor() {
        super();
        this.enterGear = this.enterGear.bind(this);
        this.viewIndex = this.viewIndex.bind(this);
    }

    enterGear() {
        this.props.onNav("enter");
    }

    viewIndex() {
        this.props.onNav("view");
    }

    render() {
        return (
            <div>
                <div className="headerbox">
                    <img src={logo} className="ql-logo" alt="logo" />     
                    <h1 style={{marginTop:0, wordSpacing: "5px", color: "#48b948"}}> DATA STORE</h1>
                    <div style={{width:"290px"}}>
                        <RaisedButton backgroundColor={"grey"} style={{ width: "50%" }} label="Enter Gear" onClick={this.enterGear} />
                        <RaisedButton style={{ width: "50%" }} label="View Index" onClick={this.viewIndex} />
                    </div>
                </div>
            </div>
        )
    }
}