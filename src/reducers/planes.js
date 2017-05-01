import consts from '../constants/Planes'

const initialState = {
    planeList: [
        {
            id: consts.keyGen(),
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
initialState.notFilteredPlane = initialState.planeList;

export default function planes(state = JSON.parse(JSON.stringify(initialState)), action) {
    let newState;
    switch (action.type) {
        case 'ADD_PLANE':
            state.planeList.push(JSON.parse(JSON.stringify(action.payload)));
            newState = {
                planeList: state.planeList,
                notFilteredPlane: state.planeList
            }

            return {
                planeList: newState.planeList,
                notFilteredPlane: newState.planeList
            };

        case 'DEL_PLANE':
            newState = {
                planeList: state.planeList.filter(function (el) {
                    return el.id !== action.payload
                })
            }
            newState = {
                planeList: state.planeList,
                notFilteredPlane: initialState.planeList
            }

            return {
                planeList: newState.planeList,
                notFilteredPlane: newState.planeList
            };

        case 'RED_PLANE':
            for (var i=0;i<state.planeList.length;i++){
                if (state.planeList[i].id === action.id) {
                    state.planeList[i] = action.payload;
                    break;
                }
            }

            return {
                planeList: state.planeList,
                notFilteredPlane: state.planeList
            };

        case 'FILTER_DEPARTURE':
            if (action.payload !== '') {
                newState = {
                    planeList: state.planeList.filter(function (el) {
                        return el.departureTown.toLowerCase().indexOf(action.payload) !== -1;
                    }),
                    notFilteredPlane: state.notFilteredPlane
                };
                newState.planeList.unshift(state.notFilteredPlane[0])

                return {
                    planeList: newState.planeList,
                    notFilteredPlane: state.notFilteredPlane
                };
            }

            return {
                planeList: state.notFilteredPlane,
                notFilteredPlane: state.notFilteredPlane
            };


        case 'FILTER_ARRIVAL':
            if (action.payload !== '') {
                newState = {
                    planeList: state.planeList.filter(function (el) {
                        return el.arrivalTown.toLowerCase().indexOf(action.payload) !== -1;
                    }),
                    notFilteredPlane: state.notFilteredPlane
                };
                newState.planeList.unshift(state.notFilteredPlane[0])

                return {
                    planeList: newState.planeList,
                    notFilteredPlane: state.notFilteredPlane
                };
            }

            return {
                planeList: state.notFilteredPlane,
                notFilteredPlane: state.notFilteredPlane
            };

        case 'FILTER_STATUS':
            if (action.payload !== '') {
                newState = {
                    planeList: state.planeList.filter(function (el) {
                        return el.status.indexOf(action.payload) !== -1;
                    }),
                    notFilteredPlane: state.notFilteredPlane
                };
                newState.planeList.unshift(state.notFilteredPlane[0])

                return {
                    planeList: newState.planeList,
                    notFilteredPlane: state.notFilteredPlane
                };
            }

            return {
                planeList: state.notFilteredPlane,
                notFilteredPlane: state.notFilteredPlane
            };


        default:
            return state;
    }
}

