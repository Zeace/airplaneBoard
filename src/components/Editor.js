import React, {Component} from 'react';
import {connect} from 'react-redux';

import consts from '../constants/Planes'

class Editor extends Component {
    inputChange(e) {
        switch (e.target.name) {
            case 'number':
                this.props.inputForm.number = e.target.value;
                break;
            case 'departureTown':
                this.props.inputForm.departureTown = e.target.value;
                break;
            case 'arrivalTown':
                this.props.inputForm.arrivalTown = e.target.value;
                break;
            case 'typeOfPlane':
                this.props.inputForm.typeOfPlane = e.target.value;
                break;
            case 'arrivalTime':
                this.props.inputForm.arrivalTime = e.target.value;
                break;
            case 'actualTime':
                this.props.inputForm.actualTime = e.target.value;
                break;
            case 'status':
                this.props.inputForm.status = e.target.value;
                break;
        }
    }

    render() {
        const {
            number, departureTown, arrivalTown, typeOfPlane,
            arrivalTime, actualTime, status, visible
        } = this.props.inputForm;
        if (visible) {
            return <div className='editor'>
                <div className='input'>
                    <span>Номер рейса</span>
                    <input onBlur={::this.inputChange}
                           type='text'
                           defaultValue={number}
                           name='number'/>
                </div>
                <div className='input'>
                    <span>Город вылета</span>
                    <input onBlur={::this.inputChange}
                           name='departureTown'
                           type='text'
                           defaultValue={departureTown}/>
                </div>
                <div className='input'>
                    <span>Город прибытия</span>
                    <input onBlur={::this.inputChange}
                           name='arrivalTown'
                           type='text'
                           defaultValue={arrivalTown}/>
                </div>
                <div className='input'>
                    <span>Тип самолёта</span>
                    <input onBlur={::this.inputChange}
                           name='typeOfPlane'
                           type='text'
                           defaultValue={typeOfPlane}/>
                </div>
                <div className='input'>
                    <span>Время прибытия</span>
                    <input onChange={::this.inputChange}
                           name='arrivalTime'
                           type='time'
                           defaultValue={arrivalTime}/>
                </div>
                <div className='input'>
                    <span>Фактическое время</span>
                    <input onBlur={::this.inputChange}
                           name='actualTime'
                           type='time'
                           defaultValue={actualTime}/>
                </div>
                <div className='input'>
                    <span>Статус</span>
                    <select onBlur={::this.inputChange}
                            name='status'
                            defaultValue={status}>
                        {consts.STATUSES.map(function (el) {
                            return <option key={el} value={el}>{el}</option>
                        })}
                    </select>
                </div>
            </div>
                ;
        } else {
            return null
        }

    }

}

function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps)(Editor);
