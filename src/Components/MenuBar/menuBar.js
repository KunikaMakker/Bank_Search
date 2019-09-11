import React from 'react';
import { Menu } from 'semantic-ui-react';
import CityDropDown from '../CityDropdown';
import SearchBar from '../SearchBar';
import './menuBar.css';

const MenuBar = (props) => {
        return(
            <Menu secondary className='menuBar'>
                <Menu.Item>
                    <CityDropDown 
                        selectedCity={props.selectedCity}
                        onChangeSelectedCity={props.onChangeSelectedCity}
                    />
                </Menu.Item>
                <Menu.Item>
                    <SearchBar />
                </Menu.Item>
            </Menu>
        );
    }

export default MenuBar;