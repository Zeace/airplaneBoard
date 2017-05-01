

const initialState = {
    number: '',
    departureTown: '',
    arrivalTown: '',
    typeOfPlane: '',
    arrivalTime: '',
    actualTime: '',
    status: ''

};

export default function inputForm(state = JSON.parse(JSON.stringify(initialState)), action) {
    switch (action.type) {
        case 'INPUT_UPDATE':
            // console.log(state);
            // state = action.payload
            console.log('tut000')
            console.log(state);

            return {
                number: action.payload.number,
                departureTown: action.payload.departureTown,
                arrivalTown: action.payload.arrivalTown,
                typeOfPlane: action.payload.typeOfPlane,
                arrivalTime: action.payload.arrivalTime,
                actualTime: action.payload.actualTime,
                status: action.payload.status

            }

        default:
            return state;
    }
}


