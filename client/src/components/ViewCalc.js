import React from 'react';
import _ from 'lodash';

export default class ViewCalc extends React.Component {

    constructor() {
        super();
    }

    render() {

        const {gear} = this.props;

        const gears = gear.map((gear, index) => {
			return <GearLine key={gear.id} {...gear} />
        })
        
        return (
            <div>
                <div className="f-row">
                </div>
            </div>
        )
    }
}