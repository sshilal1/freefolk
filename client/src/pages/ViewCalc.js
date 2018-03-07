import React from 'react';
import _ from 'lodash';
import axios from 'axios';

export default class ViewCalc extends React.Component {

    constructor() {
        super();
        this.state = { helm: [], chst: [], glvs: [], boot: [],
            main: [], pend: [], ring: [], tals: [], offh: []
        }
    }

    componentWillMount() {
        
    }

    fetchGear(type) {
        axios.get(`/${type}`)
        .then(function(res) {
            this.setState({
                [type] : res.data
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    render() {

        const {gear} = this.props;
        
        return (
            <div>
                <div className="f-row">
                </div>
            </div>
        )
    }
}