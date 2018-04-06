import React from 'react';
import _ from 'lodash';
import axios from 'axios';

export default class ViewCalc extends React.Component {

    constructor() {
        super();
        this.state = { helm: '', chst: '', glvs: '', boot: '',
            main: '', pend: '', ring: '', tals: '', offh: ''
        }
    }

    render() {

        const {sortedGears} = this.props;

        console.log(sortedGears);
        
        return (
            <div>
                <div className="f-row">
                </div>
            </div>
        )
    }
}