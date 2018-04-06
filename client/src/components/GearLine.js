import React from 'react';

export default class GearLine extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

    	const {name,attack,health,defense,magic} = this.props;

        return (
            <div className="f-row">
            	<div className="gear-row">
            		<div>{name}</div>
                    <div>{health}</div>
            		<div>{attack}</div>
            		<div>{defense}</div>
            		<div>{magic}</div>
            	</div>
            </div>
        )
    }
}