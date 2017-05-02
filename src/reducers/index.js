import {combineReducers} from 'redux';
import planes from './planes';
import inputForm from './inputForm';
import filters from './filters';

export default combineReducers({
    planes,
    inputForm,
    filters
});
