import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import BankReducer from './reduxStore/reducers/bankReducer';

const store = createStore(BankReducer, applyMiddleware(thunk))
export default store;