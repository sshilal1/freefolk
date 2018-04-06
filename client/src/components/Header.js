import React from 'react';
import logo from '../ql.logo.png';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends React.Component {

    constructor() {
        super();
        this.enterGear = this.enterGear.bind(this);
        this.viewCodes = this.viewCodes.bind(this);
        this.viewIndex = this.viewIndex.bind(this);
        this.viewCalc = this.viewCalc.bind(this);
    }

    enterGear() {
        this.props.onNav("gear");
        //alert("coming soon");
    }

    viewIndex() {
        this.props.onNav("index");
    }

    viewCodes() {
        this.props.onNav("codes");
    }

    viewCalc() {
        this.props.onNav("calc");
    }

    render() {

        const { nav } = this.props;

        return (
            <div>
                <div className="headerbox">
                    <img src={logo} className="ql-logo" alt="logo" />     
                    <h1 style={{marginTop:0, wordSpacing: "5px", color: "#48b948"}}>The Freefolk</h1>
                    <div style={{width:"290px"}}>
                        {/*<RaisedButton style={{ width: "33%" }} backgroundColor={nav.codes} label="Codes" onClick={this.viewCodes} />*/}
                        <RaisedButton style={{ width: "33%" }} backgroundColor={nav.gear} label="Gear" onClick={this.enterGear} />                       
                        <RaisedButton style={{ width: "33%" }} backgroundColor={nav.index} label="Index" onClick={this.viewIndex} />
                        <RaisedButton style={{ width: "33%" }} backgroundColor={nav.calc} label="Calc" onClick={this.viewCalc} />
                    </div>
                </div>
            </div>
        )
    }
}