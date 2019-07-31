import * as types from './../Constants/ActionTypes';
import { v4 } from 'uuid';
import { apiKey, myId, mySecret, authCode } from './../stravaAuth';
const axios = require('axios');

export function fetchProfile(){
   return function(dispatch) {
    
    let localProfileId = v4();
    let queryUrl = "https://www.strava.com/api/v3/athlete/";
    let AuthRedirect = "https://www.strava.com/oauth/token";
    const proxy = "https://testthisout.herokuapp.com/"

    axios.get(proxy + queryUrl,{
        crossdomain: true,
        method: 'get',
        params: {
            'client_id': myId,
            'client_secret': mySecret,
            'code': authCode,
            'grant_type': 'authorization_code'
        },
        headers: {
            'Authorization': 'Bearer '+ apiKey,
        },
    }).then((response) => {
        let profile = response.data
        console.log(profile.city);
    
        
        //store values and pass these to the reducer to then display does this call work?
        
    })
    

    // https://www.strava.com/api/v3/athlete/?client_id=37306&client_secret=eaa2a51a7f73bbd6fe9d3c57e828c26d52be8767&code=abcff616fadea0370b53f81869d86439c0240b0b&grant_type=authorization_code
   }
}

export const signIn = (localProfileId) => ({
    type: types.SIGN_IN,
    profileId: localProfileId
});