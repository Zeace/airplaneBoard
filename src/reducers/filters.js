const initialState = {
    departureTown: '',
    arrivalTown: '',
    status: ''
};

export default function filters(state = JSON.parse(JSON.stringify(initialState)), action) {
    switch (action.type) {
        default:
            return state;
    }
}


