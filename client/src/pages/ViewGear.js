import React from 'react';
import GearLine from '../components/GearLine';
import a from '../img/attack.png';
import h from '../img/health.png';
import d from '../img/defense.png';
import m from '../img/magic.png';

const gearClasses = [
    "Main Hand",
    "Off Hand",
    "Helmet",
    "Armor",
    "Gloves",
    "Boots",
    "Pendant",
    "Ring",
    "Talisman"
]

export default class ViewGear extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {gear,sortedGears} = this.props;

        var gearContent = Object.keys(sortedGears).map((key) => {
            return (
                <div>
                    <div className="gear-row--heading">{key}</div>
                    {
                        sortedGears[key].map((item) => {
                            return <GearLine key={item.id} {...item} />
                        })
                    }
                </div>
            )
        });

        const gears = gear.map((item, index) => {
			return <GearLine key={item.id} {...item} />
        })
        
        return (
            <div>
                <div className="f-row">
                    <div className="gear-row-title">
                        <div style={{fontSize:"24px"}} className="gear-title">Name</div>
                        <img src={h} style={{width:"30px"}} className="gear-icon" alt="H" />
                        <img src={a} style={{width:"24px"}} className="gear-icon" alt="A" />
                        <img src={d} style={{width:"30px"}} className="gear-icon" alt="D" />
                        <img src={m} className="gear-icon" alt="M" />
                    </div>
                </div>
                {gearContent}
            </div>
        )
    }
}