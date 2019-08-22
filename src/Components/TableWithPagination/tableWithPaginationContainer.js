import React from 'react';
import {connect} from 'react-redux';
import TableWithPagination from './tableWithPagination';
import _ from 'lodash';
import Loader from '../Loader';

class TableWithPaginationContainer extends React.Component {

    handleSearchChange = (searchValue) => {
        if(searchValue) {
            const re = new RegExp(_.escapeRegExp(searchValue), 'i');
            const toMatch = result => {return Object.values(result).map(res =>{return re.test(res)}).some(x => x === true);}
            return _.filter(this.props.apiResponse.data, toMatch)
        }
        return this.props.apiResponse.data;
    };


    render(){
        if(this.props.apiResponse.data != null)
        {
            return(
            <TableWithPagination
            {...this.props}
            apiResponse={this.props.apiResponse}
            rowData={this.handleSearchChange(this.props.searchValue)}
            key={this.props.searchValue}
            />
            );
        }
        else{
            return(
                <Loader />
            )
        }
        
    }    
};

const mapStateToProps = (state) => ({
    searchValue: state.searchValue
});

export default connect(mapStateToProps, null)(TableWithPaginationContainer);