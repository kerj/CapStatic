export default (state = {}, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            const Id = action;
            console.log('sign in attempt');
            let newState = Object.assign({}, state, {
                [Id]: {
                    stats: null
                }
            });
            return newState;
        default:
            return state;

    }
}