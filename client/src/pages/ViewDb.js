import React from 'react';
import GearLine from '../components/GearLine';
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

        const gears = gear.map((item, index) => {
			return <GearLine key={item.id} {...item} />
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