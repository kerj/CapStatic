import * as types from './../Constants/ActionTypes';
import { v4 } from 'uuid';
import { apiKey, myId, mySecret, authCode } from './../stravaAuth';
import constants from './../Constants';
import Firebase from 'firebase';
import firebaseConfig from './../Constants/firebaseConfig';
const axios = require('axios');

//create instance of firebase
Firebase.initializeApp(firebaseConfig);
const rideList = Firebase.database().ref('rideList');


//persist API data in firebase
function addRides(polyline, rideName, stravaId, distance){
        rideList.push({
        Polyline: polyline,
        RideName: rideName,
        StravaId: stravaId,
        Distance: distance
    })
}

//below will fetch data from strava api
// export function fetchProfile() {
//     return function (dispatch) {

//         let localProfileId = v4();
//         let queryUrl = "https://www.strava.com/api/v3/athlete/";
//         let AuthRedirect = "https://www.strava.com/oauth/token";
//         const proxy = "https://testthisout.herokuapp.com/";

//         axios.get(proxy + queryUrl, {
//             crossdomain: true,
//             method: 'get',
//             params: {
//                 'client_id': myId,
//                 'client_secret': mySecret,
//                 'code': authCode,
//                 'grant_type': 'authorization_code'
//             },
//             headers: {
//                 'Authorization': 'Bearer ' + apiKey,
//             },
//         }).then((response) => {
//             let profile = response.data
//             console.log(profile);
//             //create_at give the time "2015-02-15T21:02:27Z"
//             //updated_at gives the time "2019-05-12T22:26:52Z"

//             //store values and pass these to the reducer to then display does this call work?

//         })


//         // https://www.strava.com/api/v3/athlete/?client_id=37306&client_secret=eaa2a51a7f73bbd6fe9d3c57e828c26d52be8767&code=abcff616fadea0370b53f81869d86439c0240b0b&grant_type=authorization_code
//     }
// }

export function fetchRideList() {
    return function (dispatch) {
        let queryUrl = "https://www.strava.com/api/v3/athlete/activities";
        const proxy = "https://testthisout.herokuapp.com/";

        axios.get(proxy + queryUrl, {
            crossdomain: true,
            method: 'get',
            params: {
                'before': '1564555884',
                'after': '1438325484',
                'page': '1',
                'per_page': '30',
            },
            headers: {
                'Authorization': 'Bearer ' + authCode,
                'accept': 'application/json'
            },
        }).then((response) => {
            let rideList = response.data
            // rideList.forEach((ride) => {
            //     let polyline = ride.map['summary_polyline'];
            //     let rideName = ride.name;
            //     let stravaId = ride.id;
            //     let distance = ride.distance;
            //     // addRides(polyline, rideName, stravaId,distance);
            //     console.log(ride);
                
            // });
            dispatch(makeMasterList(rideList));
            //persist list in firebase

            // dispatch(makeMaps(polyline, name, id, distance))
        })
    }
}

export const makeMasterList = (rideList) => ({
    type: types.GET_LIST,
    rideList
})

export const makeMap = (polyline, name, stravaId, distance) => ({
    type: types.MAKE_MAP,
    polyline,
    name,
    stravaId,
    distance
});

// export const changeMap = (currentMapId) => ({
//     type: types.CHANGE_MAP,
//     currentMapId
// });

export const signIn = (localProfileId) => ({
    type: types.SIGN_IN,
    profileId: localProfileId
});


//https://www.strava.com/api/v3/athlete/activites?before=1564555884&after=1438325484&page=1&code=c71ecf2b8c6ccc404acdbc57f12f04629b162480&grant_type=authorization_code&client_id=37306&client_secret=eaa2a51a7f73bbd6fe9d3c57e828c26d52be8767

//https://www.strava.com/api/v3/athlete/activities?before=1564555884&after=1438325484&page=1&per_page=25&code=568a4d6c579489a9683356805fce3348cee862a4&grant_type=authorization_code&client_id=37306&client_secret=eaa2a51a7f73bbd6fe9d3c57e828c26d52be8767

//https://www.strava.com/api/v3/athlete/activities?before=1564555884&after=1438325484&page=1&per_page=25
//https://www.strava.com/api/v3/athlete/activities?before=1564555884&after=1438325484&page=1&per_page=25