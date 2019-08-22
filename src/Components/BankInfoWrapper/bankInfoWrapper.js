import React from 'react';
import {Segment} from 'semantic-ui-react';
import MenuBar from '../MenuBar';
import TableWithPagination from '../TableWithPagination';

class BankInfoWrapper extends React.Component {

    render(){
    return(
        <React.Fragment>
            <Segment raised>
                <MenuBar 
                    selectedCity={this.props.selectedCity}
                    onChangeSelectedCity={this.props.onChangeSelectedCity}
                />
            </Segment>
            <TableWithPagination 
                apiResponse={this.props.apiResponse}
                key={this.props.selectedCity}
            />
        </React.Fragment>
        );
    }
}
export default BankInfoWrapper;