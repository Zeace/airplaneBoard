import React, {Component} from 'react';
import {connect} from 'react-redux';
import consts from '../constants/Planes'

class Filter extends Component {
    depTownSearch(event) {
        console.log(event.target.value.toLowerCase());
        this.props.filterDepartureTown(event.target.value);
    }

    arrTownSearch(event) {
        console.log(event.target.value.toLowerCase());
        this.props.filterArrivalTown(event.target.value);
    }

    statusSearch(event) {
        console.log(event.target.value);
        this.props.filterStatus(event.target.value);
    }

    render() {

        return <div className='filters'>
            <div className='plane-count'>
                <span>Всего рейсов</span>
                <input type='text' disabled='true' value={this.props.count}/>
            </div>
            <div className='town-filter'>
                <span>Город вылета</span>
                <input type='text' onChange={::this.depTownSearch}/>
            </div>
            <div className='town-filter'>
                <span>Город прилета</span>
                <input type='text' onChange={::this.arrTownSearch}/>
            </div>
            <div className='status-select'>
                <span>Статус</span>
                <select onChange={::this.statusSearch}>
                    {consts.STATUSES.map(function (el) {
                        return <option key={el}>{el} </option>
                    })}
                </select>
            </div>
        </div>;
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Filter);

