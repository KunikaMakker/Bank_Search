import React from 'react';
import {Dropdown} from 'semantic-ui-react';
import {cityOptions} from '../constant';

const CityDropdown = (props) => {
    return(
        <Dropdown 
            options={cityOptions}
            selection 
            value={props.selectedCity}
            onChange={props.onChangeSelectedCity} 
            />
    );
}

export default CityDropdown;