import React, {Component} from 'react';
import {connect} from 'react-redux';
import consts from '../constants/Planes'

class Filter extends Component {
    filterChange(e) {
        switch (e.target.name) {
            case 'departureTown':
                this.props.filters.departureTown = e.target.value;
                break;
            case 'arrivalTown':
                this.props.filters.arrivalTown = e.target.value;
                break;
            case 'status':
                this.props.filters.status = e.target.value;
                break;
        }
        console.log('вызов');
        this.props.filter(this.props.filters);
    }

    render() {
        const {departureTown, arrivalTown, status} = this.props.filters;

        return <div className='filters'>
            <div className='plane-count'>
                <span>Всего рейсов</span>
                <input className='filter-input'
                       type='text'
                       disabled='true'
                       value={this.props.count}/>
            </div>
            <div className='town-filter'>
                <span>Город вылета</span>
                <input className='filter-input'
                       type='text'
                       name='departureTown'
                       defaultValue={departureTown}
                       onChange={::this.filterChange}/>
            </div>
            <div className='town-filter'>
                <span>Город прилета</span>
                <input className='filter-input'
                       type='text'
                       name='arrivalTown'
                       defaultValue={arrivalTown}
                       onChange={::this.filterChange}/>
            </div>
            <div className='status-select'>
                <span>Статус</span>
                <select className='filter-input'
                        defaultValue={status}
                        name='status'
                        onChange={::this.filterChange}>
                    {consts.STATUSES.map(function (el) {
                        return <option key={el}>{el} </option>
                    })}
                </select>
            </div>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(Filter);

