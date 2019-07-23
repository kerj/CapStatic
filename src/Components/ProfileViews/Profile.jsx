import React from 'react';
import RideList from './RideViews/RideList';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import RideMap from './RideViews/MapViews/RideMap'

export default function Profile(props) {
    return (
        <div>
            {/* {props.rideList.map((ride)=>{
                <div key={v4()}>

                </div>
            })} */}
            <RideMap/>
        </div>
    )
}

Profile.propTypes = {
    rideList: PropTypes.array
}


