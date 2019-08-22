import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './searchBar';
import {setSearchValue} from '../../reduxStore/actions/bankAction'
import {debounce} from 'lodash';

class SearchBarContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    handleDebounceOnChange = debounce(this.props.setSearchValue, this.props.waitingTime);
    
    render(){
    return(
        <SearchBar
        {...this.props}
        handleDebounceOnChange={this.handleDebounceOnChange}
        />
    );}
};

const mapDispatchToProps = (dispatch) => ({
    setSearchValue: (e,{value}) => dispatch(setSearchValue(value))
});

SearchBarContainer.defaultProps = {
    waitingTime: 500,
};

export default connect(null, mapDispatchToProps)(SearchBarContainer);