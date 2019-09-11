import React from 'react';
import PaginationWithDropdown from './PaginationWithDropdown';
import { Table } from 'semantic-ui-react';
import {bankDetails} from '../constant';
import TableHeader from './TableItems/tableHeader';
import TableBody from './TableItems/tableBody';

class TableWithPagination extends React.Component {
    state = {
        pagination: {
            activePage: 1,
            pageOffset: 5,
            startIndex: 0,
            endIndex: 5
        },
        favBanks:[]
    }

    handlePaginationChange = (e,{activePage}) => {
        const pagination = this.state.pagination;
        const startIndex = pagination.pageOffset * (activePage-1);
        let endIndex = pagination.pageOffset * activePage;
        this.setState(() => ({pagination:{...pagination, ...{activePage, startIndex, endIndex}}})) 
    }

    onPageOffsetChange = (e, {value}) => {
        this.setState({pagination: {...this.state.pagination, ...{pageOffset: value, endIndex: value}}}, () => {
            this.handlePaginationChange('',{activePage: this.state.pagination.activePage})
        })
    };

    addToFav = (value) => {
        this.setState(prevState => ({
            favBanks:[...prevState.favBanks,value]
        }),function(){
            if(localStorage.getItem(value)){
                localStorage.removeItem(value);
                
            }
            else{
                localStorage.setItem(value,JSON.stringify(this.state.favBanks))
            }
        }
        );
    }

    render(){
        const {pageOffset, activePage, startIndex, endIndex } = this.state.pagination;
        return(
            <React.Fragment>
                <Table celled>
                <TableHeader 
                        bankDetails={bankDetails}
                    />
                
                <TableBody 
                    favBanks={this.state.favBanks}
                    addToFav={this.addToFav}
                    apiResponse={this.props.rowData.slice(startIndex,endIndex)}
                    searchValue={this.props.searchValue}
                />
                <PaginationWithDropdown 
                    rowDataLength={this.props.rowData.length}
                    pagination={this.state.pagination}       
                    pageOffset={pageOffset}
                    activePage={activePage}
                    onPageOffsetChange={this.onPageOffsetChange}
                    handlePaginationChange={this.handlePaginationChange}
                />
                </Table>
            </React.Fragment>
        );
    }
}

export default TableWithPagination;