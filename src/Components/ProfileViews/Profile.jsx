import React, { Component } from 'react';
import ProfileStats from './ProfileStatViews/ProfileStats';
import RideList from './RideViews/RideList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Profile extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            selectedProfile: null
        }; 
    }

    componentDidMount() {
        //redirect to gain auth from strava
        //https://www.strava.com/oauth/authorize?client_id=37306&response_type=code&redirect_uri=http://developers.strava.com&approval_prompt=force
        //client_id=37306 needs to be retrieved from strava
        //after Oauth on strava takes places with a redirect at this step it is smooth sailing 

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

Profile.propTypes = {
    masterRideList: PropTypes.array,
    riderStats: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        masterProfile: state
    }
}

export default connect(mapStateToProps)(Profile);
