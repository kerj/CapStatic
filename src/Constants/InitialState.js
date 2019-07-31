const mapList = {
    1: 'longString'
};

export const initialState = {
    currentMapId: 1,
    masterRideList: {
        1: {
            name: 'a ride name',
            distance: '100km',
            polyline: 'long ass string',
            id: 'number',
            mapArray: mapList[1],
            arrayPosition: 0
        }
    },
};