// import TIME_OPTIONS from '../constants/Planes';

function addPlane(props) {
    return {
        type: 'ADD_PLANE',
        payload: props
    }
}

function delPlane(id) {
    return {
        type: 'DEL_PLANE',
        payload: id
    }
}

function redPlane(props, id) {
    return {
        type: 'RED_PLANE',
        payload: props,
        id: id
    }
}

function filterDepartureTown(text) {
    return {
        type: 'FILTER_DEPARTURE',
        payload: text
    }
}

function filterArrivalTown(text) {
    return {
        type: 'FILTER_ARRIVAL',
        payload: text
    }
}

function filterStatus(text) {
    return {
        type: 'FILTER_STATUS',
        payload: text
    }
}

function inputUpdate(values) {
    return {
        type: 'INPUT_UPDATE',
        payload: values
    }
}

export {addPlane, delPlane, redPlane, filterDepartureTown, filterArrivalTown, filterStatus, inputUpdate}