import React, { Component } from 'react';
import ProfileStats from './ProfileStatViews/ProfileStats';
import RideList from './RideViews/RideList';
import RideMap from './RideViews/MapViews/RideMap';
import { connect } from 'react-redux';




export default class Profile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            masterRideList: null,
            riderStats: {
                last: null,
                ninty: null,
                all: null
            },
            selectedRide: null
        } 
    }


    render() {
        return (
            <div>
                <ProfileStats/>
                <RideList/>
            </div>
        )
    }
}




