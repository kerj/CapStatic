import constants from './../Constants';
const { initialState, types } = constants;

const mapManipReducer = (state = initialState.masterRideList = {}, action) => {
    let newRideByEntry;
    let newMapByIdStateSlice;
    let masterRideList;
    let mapByIdEntry;
    switch (action.type) {
        case types.MAKE_MAP:
            console.log(state[action.id]);
            mapByIdEntry = Object.assign({}, state[action.id], {
                isFetching: false,
                name: action.name,
                distance: action.distance,
                polyline: action.polyline,
                id: action.id,
                displayMap: true
            });
            newMapByIdStateSlice = Object.assign({}, state, {
                [action.id]: mapByIdEntry
            });
            console.log(newMapByIdStateSlice);

            return newMapByIdStateSlice;
        case types.GET_LIST:
              let newState = Object.assign({}, state, {
                
              })
            
            
            return  action.rideList
        case types.CHANGE_MAP:
            return action.newMapByIdStateSlice;
        default:
            return state;

    }
}

export default mapManipReducer;