import {SEARCH_TABLE} from '../actions/types';

const initialState = {
    searchValue: '',
    city: {
        data:[]
    }
};

const BankReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case SEARCH_TABLE:
            return { ...state,  searchValue: action.value}
        default:
            return state;
    }
}
export default BankReducer;