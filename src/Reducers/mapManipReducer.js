import constants from './../Constants';
const { c } = constants;

const mapManipReducer = (state = {}, action) => {
    let newRideByEntry;
    let newMapByIdStateSlice;
    let masterRideList;
    let mapByIdEntry;
    switch (action.type) {
        case c.MAKE_MAP:
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
        case c.GET_LIST:
              let newState = Object.assign({}, state, {
                
              })
            
            
            return  action.rideList
        case c.CHANGE_MAP:
            return action.newMapByIdStateSlice;
        default:
            return state;

    }
}

export default mapManipReducer;