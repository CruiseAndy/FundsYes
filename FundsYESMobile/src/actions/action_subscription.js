import axios from 'axios';

export const GET_FUNDSCOMPANYS = 'GET_FUNDSCOMPANYS';
export const GET_FUNDSNAMES = 'GET_FUNDSNAMES';

const FundCompanys_URL = 'https://rawgit.com/CruiseAndy/d5505fbfc8b5ddd5ec1de4b96356ae9c/raw/0e4dbc9c3d3101e49f3c6c53154928a60f45c871/SubscriptionCompanyList.json';
const FundNames_URL = 'https://rawgit.com/CruiseAndy/e54ce20af0ca7552dd2de86d51d2ad62/raw/02e535c81e33286af94c42f242b24ce0c84e317d/SubscriptionNameList.json';

export function getFundsCompanys() {
    const request = axios.get(FundCompanys_URL);

    return {
        type: GET_FUNDSCOMPANYS,
        payload: request
    }
}

export function getFundsNames(company) {
    const request = axios.get(FundNames_URL);
    
    return {
        type: GET_FUNDSNAMES,
        payload: request
    }
}