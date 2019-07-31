import constants from './../Constants';
const { initialState, types } = constants;

const mapManipReducer = (state = {}, action) => {
    let mapByIdEntry;
    let newMapByIdStateSlice;
    switch (action.type) {
        case 'MAKE_MAP':
            mapByIdEntry = Object.assign({}, state[action.id], {
                    isFetching: false,
                    name: action.name,
                    distance: action.distance,
                    polyline: action.polyline,
                    id: action.id
            });
            newMapByIdStateSlice = Object.assign({}, state, {
                [action.id]: mapByIdEntry
            });
            console.log(newMapByIdStateSlice);
            
            return newMapByIdStateSlice;
        default:
            return state;

    }
}

export default mapManipReducer;