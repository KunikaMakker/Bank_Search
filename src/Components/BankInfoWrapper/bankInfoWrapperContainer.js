import React from 'react';
import BankInfoWrapper from './bankInfoWrapper';
import {url} from '../constant';
import {fetchBankData} from '../../repository/HTTPCall';

class BankInfoWrapperContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            apiResponse: [],
            selectedCity: 'MUMBAI',
        }
    }

    fetchData() {
        // fetchBankData(url+this.state.selectedCity)
        // .then(
        //     (response) => {
        //         this.setState({
        //             apiResponse: response
        //         })         
        //     },
        //     (error) => {
        //         console.log(error);
        //     }
        // )
        fetchBankData(url).then((res)=>{
            console.log(res);
            this.setState({
                apiResponse: res
            }) 
        })

    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
    }

    onChangeSelectedCity = (e,{value}) => {
        this.setState({
            selectedCity: value
        });
    }

    render(){
        return(
            <BankInfoWrapper 
                apiResponse={this.state.apiResponse}
                selectedCity={this.state.selectedCity}
                onChangeSelectedCity={this.onChangeSelectedCity}
            />
        );
    }
}

export default BankInfoWrapperContainer;