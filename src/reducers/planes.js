import consts from '../constants/Planes'

const initialState = {
    planeList: [
        {
            id: 'header',
            number: '№',
            departureTown: 'Отправление',
            arrivalTown: 'Прибытие',
            typeOfPlane: 'Тип самолёта',
            arrivalTime: 'Время',
            actualTime: 'Фактическое время',
            status: 'Статус'
        },
        {
            id: consts.keyGen(),
            number: 'DN4f57FV',
            departureTown: 'Moscow',
            arrivalTown: 'Ekaterinburg',
            typeOfPlane: 'tu154',
            arrivalTime: '04:05',
            actualTime: '04:05',
            status: 'Посадка'
        },
        {
            id: consts.keyGen(),
            number: 'RT4524WE',
            departureTown: 'Ekaterinburg',
            arrivalTown: 'Tura',
            typeOfPlane: 'tu154',
            arrivalTime: '04:09',
            actualTime: '04:09',
            status: 'Посадка'
        }
    ]
};
initialState.notFilteredPlane = JSON.parse(JSON.stringify(initialState.planeList));

export default function planes(state = JSON.parse(JSON.stringify(initialState)), action) {
    let newState;
    switch (action.type) {
        case 'ADD_PLANE':
            state.notFilteredPlane.push(JSON.parse(JSON.stringify(action.payload)));

            return {
                planeList: state.notFilteredPlane,
                notFilteredPlane: state.notFilteredPlane
            };

        case 'DEL_PLANE':
            newState = state.notFilteredPlane.filter(function (el) {
                return el.id !== action.payload
            });

            return {
                planeList: newState,
                notFilteredPlane: newState
            };

        case 'RED_PLANE':
            for (var i = 0; i < state.notFilteredPlane.length; i++) {
                if (state.notFilteredPlane[i].id === action.id) {
                    state.notFilteredPlane[i] = action.payload;
                    break;
                }
            }

            return {
                planeList: state.notFilteredPlane,
                notFilteredPlane: state.notFilteredPlane
            };

        case 'FILTER':
            newState = JSON.parse(JSON.stringify(state.notFilteredPlane));
            console.log(newState);
            if (action.payload.departureTown !== '') {
                newState = newState.filter(function (el) {
                    return el.departureTown.toLowerCase().indexOf(action.payload.departureTown) !== -1;
                });
            }
            if (action.payload.arrivalTown !== '') {
                newState = newState.filter(function (el) {
                    return el.arrivalTown.toLowerCase().indexOf(action.payload.arrivalTown) !== -1;
                });
            }
            if (action.payload.status !== '') {
                newState = newState.filter(function (el) {
                    return el.status.toLowerCase().indexOf(action.payload.status) !== -1;
                });
            }

            console.log(newState);
            if (newState.length === 0 || newState[0].id !== 'header') {
                newState.unshift(initialState.planeList[0])
            }
            console.log(newState);

            return {
                planeList: newState,
                notFilteredPlane: state.notFilteredPlane
            };

        default:
            return state;
    }
}

