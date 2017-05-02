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

function filter(prop) {
    return {
        type: 'FILTER',
        payload: {
            departureTown: prop.departureTown.toLowerCase(),
            arrivalTown: prop.arrivalTown.toLowerCase(),
            status: prop.status.toLowerCase()
        }
    }
}

function inputUpdate(values) {
    return {
        type: 'INPUT_UPDATE',
        payload: values
    }
}

function changeVisible() {
    return {
        type: 'VISIBLE_CHANGE'
    }
}

export {addPlane, delPlane, redPlane, filter, inputUpdate, changeVisible}