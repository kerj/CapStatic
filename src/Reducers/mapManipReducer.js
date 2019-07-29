export default (state = {}, action) => {
    switch (action.type) {
        case 'MAP_IT':
            const Id = action;
            console.log('Map in attempt');
            let newState = Object.assign({}, state, {
                [Id]: {
                    ride: null
                }
            });
            return newState;
        default:
            return state;

    }
}