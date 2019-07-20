import React from 'react';
import RideList from './RideViews/RideList';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

export default function Profile(props) {
    return (
        <div>
            {props.rideList.map((ride)=>{
                <div key={v4()}>

                </div>
            })}
        </div>
    )
}

Profile.propTypes = {
    rideList: PropTypes.array
}
