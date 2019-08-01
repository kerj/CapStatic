import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Ride(props) {
    return (
        <div>
            <h3>{props.Name}</h3>
            <h4>{props.Distance}</h4>
            <button>Click to view Map</button>
        </div>
    )
}

Ride.propTypes = {
    Name: PropTypes.string,
    Distance: PropTypes.string
}

export default connect()(Ride)