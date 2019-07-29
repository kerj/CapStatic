import * as types from './../Constants/ActionTypes';
import { v4 } from 'uuid';
import { apiKey, myId, mySecret, authCode } from './../stravaAuth';

export function fetchProfile(){
   return function(dispatch) {
    console.log(myId);
    
    let localProfileId = v4();
    let URL = "https://www.strava.com/api/v3/athlete/?client_id=" + myId + "&client_secret=" + mySecret + "&code=" + authCode + "&grant_type=authorization_code";

    fetch({
        url: URL,
        method: "GET",
        headers: new Headers({
            'Authorization':
                'Bearer '+ apiKey,
        }),
    }).then((response) => {
        console.log(response);
    
 
        //store values and pass these to the reducer to then display does this call work?
        
    })
    

    // https://www.strava.com/api/v3/athlete/?client_id=37306&client_secret=eaa2a51a7f73bbd6fe9d3c57e828c26d52be8767&code=abcff616fadea0370b53f81869d86439c0240b0b&grant_type=authorization_code
   }
}

export const signIn = (localProfileId) => ({
    type: types.SIGN_IN,
    profileId: localProfileId
});