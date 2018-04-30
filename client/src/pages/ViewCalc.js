import React from 'react';
import _ from 'lodash';
import axios from 'axios';

import { helmets, links } from '../data/data';

export default class ViewCalc extends React.Component {

    constructor() {
        super();
        this.state = { helm: '', chst: '', glvs: '', boot: '',
            main: '', pend: '', ring: '', tals: '', offh: ''
        }
    }

    render() {

        const {sortedGears} = this.props;

        helmets.array.forEach(helmet => {
            var helmetWithLinks = links.find(link => link.id === helmet.id);
            //helmetWithLinks
        });
        
        return (
            <div>
                <div className="f-row">
                </div>
            </div>
        )
    }
}