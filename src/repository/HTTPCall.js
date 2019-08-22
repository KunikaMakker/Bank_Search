import axios from 'axios';

export const fetchBankData = (url) => axios.get(url);