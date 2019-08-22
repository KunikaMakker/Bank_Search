import React from 'react';
import { Menu } from 'semantic-ui-react';
import CityDropDown from '../CityDropdown';
import SearchBar from '../SearchBar';
import FavoriteToggle from '../FavoriteToggle';
import './menuBar.css';

class MenuBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            checked: false,
        }
    }

    showFav = () => {
        this.setState(prevState => ({checked: !prevState.checked}))
    }
    render(){  
        return(
            <Menu secondary className='menuBar'>
                <Menu.Item>
                    <CityDropDown 
                        selectedCity={this.props.selectedCity}
                        onChangeSelectedCity={this.props.onChangeSelectedCity}
                    />
                </Menu.Item>
                <Menu.Item>
                    <SearchBar />
                </Menu.Item>
                <Menu.Item>
                    <FavoriteToggle 
                        showFav={this.showFav}
                        checked={this.state.checked}
                    />
                </Menu.Item>
            </Menu>
        );
    }
}
export default MenuBar;