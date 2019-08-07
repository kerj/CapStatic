import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from './../../../Constants';
const { c } = constants;



function Ride(props) {
    function showThisMap() {
        alert('This is still in the works!')
    }
    return (
        <div>
            <h3>{props.Name}</h3>
            <h4>{props.Distance}</h4>
            <button onClick={()=> showThisMap()}>Click to view Map</button>
        </div>
    )
}

Ride.propTypes = {
    Name: PropTypes.string,
    Distance: PropTypes.string
}

export default connect()(Ride)