import React from 'react';
import {Checkbox} from 'semantic-ui-react';

const FavoriteToggle =(props)=> {
    return(
        <Checkbox slider label='Show Favorite Banks Only'
        onClick={props.showFav}
        checked={props.checked}/>
    );
}


export default FavoriteToggle;