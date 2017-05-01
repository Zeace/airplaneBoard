import {combineReducers} from 'redux';
import planes from './planes';
import inputForm from './inputForm';

export default combineReducers({
    planes,
    inputForm
});
