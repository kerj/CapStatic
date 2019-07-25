import React, { Component } from 'react';
import ProfileStats from './ProfileStatViews/ProfileStats';
import RideList from './RideViews/RideList'
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core"

const styles = makeStyles(theme => ({
	palette: {
		primary: {
			main: '#00897b'
		},
		secondary: {
			main: '#009688'
		},
	},
}));


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




