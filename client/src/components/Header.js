import React from 'react';
import logo from '../ql.logo.png';
import RaisedButton from 'material-ui/RaisedButton';

export default class EntryAdder extends React.Component {
    render() {
        return (
            <div>
                <div className="headerbox">
                    <img src={logo} className="ql-logo" alt="logo" />     
                    <h1 style={{marginTop:0, wordSpacing: "5px", color: "#48b948"}}> DATA STORE</h1>
                    <div style={{width:"290px"}}>
                        <RaisedButton backgroundColor={"grey"} style={{ width: "50%" }} label="Enter Gear" />
                        <RaisedButton style={{ width: "50%" }} label="View Index" />
                    </div>
                </div>
            </div>
        )
    }
}