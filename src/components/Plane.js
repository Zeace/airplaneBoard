import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import consts from '../constants/Planes'

class Planes extends Component {
    delPlane() {
        this.props.delPlane(this.props.id)
    }
    redPlane() {
        if (this.props.inputForm.visible) {

            let prop = this.props.inputForm;
            for (let key in prop) {
                if (prop[key] === '') {
                    alert('Введите все параметры!');

                    return
                }
            }
            prop.id = consts.keyGen();
            this.props.redPlane(prop, this.props.id);
            this.props.changeVisible();
        } else {
            this.props.inputUpdate(this.props);
            this.props.changeVisible();
        }
    }
    render() {
        const {number, departureTown, arrivalTown, typeOfPlane,
            arrivalTime, actualTime, status} = this.props;

        return <tr className='row'>
            <td className='none admin'><button onClick={::this.delPlane}>Удалить</button></td>
            <td className='none admin'>
                <button onClick={::this.redPlane}>{this.props.inputForm.visible?'Сохранить':'Изменить'}</button>
            </td>
            <td className='number'>{number}</td>
            <td className='departureTown'>{departureTown}</td>
            <td className='arrivalTown'>{arrivalTown}</td>
            <td className='typeOfPlane'>{typeOfPlane}</td>
            <td className='arrivalTime'>{arrivalTime}</td>
            <td className='actualTime'>{actualTime}</td>
            <td className='status'>{status}</td>
        </tr>;
    }

}
function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps)(Planes);


Planes.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    departureTown: PropTypes.string.isRequired,
    arrivalTown: PropTypes.string.isRequired,
    typeOfPlane: PropTypes.string.isRequired,
    arrivalTime: PropTypes.string.isRequired,
    actualTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};


