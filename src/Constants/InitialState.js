const rideList = {
    1: 'this is a test'
};

export const initialState = {
    currentRideId: 1,
    ridesById: {
        1: {
            name: 'a ride name',
            distance: '100km',
            mapPolyline: 'long ass string',
            rideArray: rideList[1],
        }
    },
};