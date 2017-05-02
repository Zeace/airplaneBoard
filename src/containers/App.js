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
        var delOnePlane=this.props.pageActions.delPlane;
        var redThisPlane=this.props.pageActions.redPlane;
        var inputFill=this.props.pageActions.inputUpdate;
        var changeVisibl=this.props.pageActions.changeVisible;

        return <div className='app'>
            <Filter count={this.props.planes.planeList.length - 1}
                    filterDepartureTown={this.props.pageActions.filterDepartureTown}
                    filterArrivalTown={this.props.pageActions.filterArrivalTown}
                    filterStatus={this.props.pageActions.filterStatus}/>
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
                                  delPlane={delOnePlane}
                                  redPlane={redThisPlane}
                                  inputUpdate={inputFill}
                                  changeVisible={changeVisibl}
                                  />
                })}
                <tr>
                    <td className='none'>
                        <EditButton addPlane={this.props.pageActions.addPlane}
                                    changeVisible={this.props.pageActions.changeVisible}
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
        inputForm: state.inputForm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
