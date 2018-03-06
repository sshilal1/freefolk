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
                <div className="f-row">
                    <div className="gear-row-title">
                        <div className="gear-title">Name</div>
                        <div className="gear-title">A</div>
                        <div className="gear-title">H</div>
                        <div className="gear-title">D</div>
                        <div className="gear-title">M</div>
                    </div>
                </div>
                {gears}
            </div>
        )
    }
}