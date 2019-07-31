import constants from './../Constants';
const { initialState, types } = constants;

const mapManipReducer = (state = initialState.masterRideList = {}, action) => {
    let mapByIdEntry;
    let newMapByIdStateSlice;
    let masterRideList;
    switch (action.type) {
        case types.MAKE_MAP:
            mapByIdEntry = Object.assign({}, state[action.id], {
                isFetching: false,
                name: action.name,
                distance: action.distance,
                polyline: action.polyline,
                id: action.id,
                arrayPosition: 0
            });
            newMapByIdStateSlice = Object.assign({}, state, {
                [action.id]: mapByIdEntry
            });
            console.log(newMapByIdStateSlice);

            return newMapByIdStateSlice;
        case types.GET_LIST:
            masterRideList = Object.keys(action.rideList).map(r => action.rideList[r]);
            //     console.log(action.rideList.length);
            // action.rideList.map((ride)=>{
            //     masterRideList = Object.assign({}, state, {
            //         ride
            //     });
            // })
            console.log(masterRideList);
            
            return masterRideList;
        default:
            return state;

    }
}

export default mapManipReducer;