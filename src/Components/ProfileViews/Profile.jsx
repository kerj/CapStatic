import React, { Component } from 'react';
import ProfileStats from './ProfileStatViews/ProfileStats';
import RideList from './RideViews/RideList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RideMap from './RideViews/MapViews/RideMap';
import constants from  './../../Constants';
const { c } = constants;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProfile: null
        };
    }

    componentDidMount() {
        console.log(this.props);
        
        //redirect to gain auth from strava
        //https://www.strava.com/oauth/authorize?client_id=37306&response_type=code&redirect_uri=http://developers.strava.com&approval_prompt=force
        //client_id=37306 needs to be retrieved from strava
        //after Oauth on strava takes places with a redirect at this step it is smooth sailing 

    }

    componentWillUnmount(){
        console.log(this.state);
        
    }

    render() {
       console.log(this.state);
       
            return (
                <div>
                    <RideList masterRideList={this.props.masterRideList}/>
                    <ProfileStats riderStats={this.props.riderStats}/> 
                    <RideMap />
                </div>
            )
        
    }
}

Profile.propTypes = {
    masterRideList: PropTypes.object.isRequired,
    riderStats: PropTypes.object,
}

const mapStateToProps = state => {
    return {
        ProfileState: state,
    }
}

export default connect(mapStateToProps)(Profile);
