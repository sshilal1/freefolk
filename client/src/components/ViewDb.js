import React from 'react';
import GearLine from './GearLine';
import a from '../img/attack.png';
import h from '../img/health.png';
import d from '../img/defense.png';
import m from '../img/magic.png';

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
                        <div style={{fontSize:"24px"}} className="gear-title">Name</div>
                        <img src={a} style={{width:"24px"}} className="gear-icon" alt="A" />
                        <img src={h} style={{width:"30px"}} className="gear-icon" alt="H" />
                        <img src={d} style={{width:"30px"}} className="gear-icon" alt="D" />
                        <img src={m} className="gear-icon" alt="M" />
                    </div>
                </div>
                {gears}
            </div>
        )
    }
}