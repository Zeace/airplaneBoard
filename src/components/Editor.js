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
        console.log(this.props.inputForm);
        const {
            number, departureTown, arrivalTown, typeOfPlane,
            arrivalTime, actualTime, status
        } = this.props.inputForm;
        console.log(number);

        return <div className='editor'>
            <div className='edit '>
                <span>Номер рейса</span>
                <input onBlur={::this.inputChange}
                       type='text'
                       state={number}
                       name='number'/>
            </div>
            <div className='edit '>
                <span>Город вылета</span>
                <input onBlur={::this.inputChange}
                       name='departureTown'
                       type='text'
                       defaultValue={departureTown}/>
            </div>
            <div className='edit '>
                <span>Город прибытия</span>
                <input onBlur={::this.inputChange}
                       name='arrivalTown'
                       type='text'
                       defaultValue={arrivalTown}/>
            </div>
            <div className='edit '>
                <span>Тип самолёта</span>
                <input onBlur={::this.inputChange}
                       name='typeOfPlane'
                       type='text'
                       defaultValue={typeOfPlane}/>
            </div>
            <div className='edit '>
                <span>Время прибытия</span>
                <input onChange={::this.inputChange}
                       name='arrivalTime'
                       type='time'
                       defaultValue={arrivalTime}/>
            </div>
            <div className='edit '>
                <span>Фактическое время</span>
                <input onBlur={::this.inputChange}
                       name='actualTime'
                       type='time'
                       defaultValue={actualTime}/>
            </div>
            <div className='edit '>
                <span>Статус</span>
                <select onBlur={::this.inputChange}
                        name='status'
                        defaultValue={status}>
                    {consts.STATUSES.map(function (el) {
                        return <option key={el}>{el} </option>
                    })}
                </select>
            </div>
        </div>
            ;
    }
}

function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps)(Editor);
