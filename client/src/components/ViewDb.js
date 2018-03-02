import React from 'react';
import GearLine from './GearLine';

export default class ViewDb extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

        const {gear} = this.props;

        const gears = gear.map((gear, index) => {
			return <GearLine key={gear.id} {...gear} />
        })
        
        return (
            <div>
                {gears}
            </div>
        )
    }
}