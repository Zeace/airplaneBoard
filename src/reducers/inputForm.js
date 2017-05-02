const initialState = {
    number: '',
    departureTown: '',
    arrivalTown: '',
    typeOfPlane: '',
    arrivalTime: '',
    actualTime: '',
    status: '',
    visible: false

};

export default function inputForm(state = JSON.parse(JSON.stringify(initialState)), action) {
    switch (action.type) {
        case 'INPUT_UPDATE':
            return {
                number: action.payload.number,
                departureTown: action.payload.departureTown,
                arrivalTown: action.payload.arrivalTown,
                typeOfPlane: action.payload.typeOfPlane,
                arrivalTime: action.payload.arrivalTime,
                actualTime: action.payload.actualTime,
                status: action.payload.status,
                visible: action.payload.visible

            };
        case 'VISIBLE_CHANGE':
            return {...state, visible: !state.visible};

        default:
            return state;
    }
}


