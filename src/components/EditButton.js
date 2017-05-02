import React, {Component} from 'react';
import {connect} from 'react-redux';
import consts from '../constants/Planes'

class EditButton extends Component {
    onAddPlaneBtnClick() {
        if (this.props.inputForm.visible) {
            let prop = this.props.inputForm;
            for (let key in prop) {
                if (prop[key] === '') {
                    alert('Введите все параметры!');

                    return
                }
            }
            prop.id = consts.keyGen();
            this.props.addPlane(prop);
            this.props.changeVisible();
        } else {
            this.props.changeVisible();
        }
    }

    render() {
        return <button className='add-plane' onClick={::this.onAddPlaneBtnClick}>
            {this.props.inputForm.visible ? 'Добавить' : 'Добавить рейс'}
        </button>;
    }
}

function mapStateToProps(state) {
    return {
        inputForm: state.inputForm
    };
}

export default connect(mapStateToProps)(EditButton);

