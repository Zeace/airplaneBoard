import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Filter from '../components/Filters';
import Editor from '../components/Editor';
import Plane from '../components/Plane';
import EditButton from '../components/EditButton';
import * as pageActions from '../actions/PageActions'
import consts from '../constants/Planes'

class App extends Component {
    render() {
        var delPlane = this.props.pageActions.delPlane;
        var redPlane = this.props.pageActions.redPlane;
        var inputUpdate = this.props.pageActions.inputUpdate;
        var changeVisible = this.props.pageActions.changeVisible;
        var addPlane = this.props.pageActions.addPlane;

        return <div className='app'>
            <Filter count={this.props.planes.planeList.length - 1}
                    filter={this.props.pageActions.filter}
                    props={this.props.inputForm}/>
            <table className='table'>
                <tbody>
                {this.props.planes.planeList.map(function (el) {
                    return <Plane key={consts.keyGen()}
                                  id={el.id}
                                  number={el.number}
                                  departureTown={el.departureTown}
                                  arrivalTown={el.arrivalTown}
                                  typeOfPlane={el.typeOfPlane}
                                  arrivalTime={el.arrivalTime}
                                  actualTime={el.actualTime}
                                  status={el.status}
                                  delPlane={delPlane}
                                  redPlane={redPlane}
                                  inputUpdate={inputUpdate}
                                  changeVisible={changeVisible}/>
                })}
                <tr>
                    <td className='none'>
                        <EditButton addPlane={addPlane}
                                    changeVisible={changeVisible}
                                    props={this.props.inputForm}/>
                    </td>
                </tr>
                </tbody>
            </table>
            <Editor props={this.props.inputForm}/>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        planes: state.planes,
        inputForm: state.inputForm,
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
