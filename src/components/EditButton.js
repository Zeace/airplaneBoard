import React, {Component} from 'react';
import {connect} from 'react-redux';
import consts from '../constants/Planes'

// import ReactDOM from 'react-dom';
//
// import Editor from '../containers/Editor';
// import PropTypes from 'prop-types';


class EditButton extends Component {
    onAddPlaneBtnClick() {
        let prop = this.props.inputForm;
        for (let key in prop) {
            if (prop[key] === '') {
                alert('Введите все параметры!');

                return
            }
        }
        prop.id = consts.keyGen();
        this.props.addPlane(prop);
    }
    render() {
        return <button className='add-plane' onClick={::this.onAddPlaneBtnClick}>
            Добавить рейс
        </button>;
    }
}

function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps)(EditButton);
