import React from 'react';
import {Search} from 'semantic-ui-react';

const SearchBar  = (props) => {
    const {
        handleDebounceOnChange, 
        isLoading
    } = props;
    return(
        <Search 
        loading={isLoading}
        onSearchChange={handleDebounceOnChange}/>
    );
}

SearchBar.defaultProps = {
    isLoading: false,
}
export default SearchBar;