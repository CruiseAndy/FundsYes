/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import axios from 'axios';

/* types */
export const GET_FUNDSDATA = 'GET_FUNDSDATA';
export const GET_OVERVIEWDATA = 'GET_OVERVIEWDATA';
export const OVERVIEW_PAGE_INDEX = "OVERVIEW_PAGE_INDEX";
export const GET_PEROIDINVESTFUNDSLIST = 'GET_PEROIDINVESTFUNDSLIST';

/* urls */
const FundsData_URL = 'https://rawgit.com/CruiseAndy/7e5b11d0cd1399ca8f720b0567606e3f/raw/f1db1b6235bd434683ce61d66de7d769b9217265/FundsData.json';
const OverviewData_URL = 'https://rawgit.com/CruiseAndy/a526793ae9a828f9be92e3614366178f/raw/35e6dcf3d99feb511e1eb62565ac75c1c35467a4/FundOverview.json';
const PeriodInvestFundsList_URL = 'https://rawgit.com/CruiseAndy/c90502cb7f88c9aecc5b28323f437220/raw/47cacabd77db644c475dd35367a38c906dea0765/PeriodInvest.json';
const testAPI = 'http://192.168.5.8/Fundsyes/FundsYes/test/123';
/*
 * Use API to get funds data for home page
 */
export function getFundsData() {
    const request = axios.get(FundsData_URL);

    return {
        type: GET_FUNDSDATA,
        payload: request
    }
}

export function getOverviewData() {
    const request = axios.get(OverviewData_URL);

    return {
        type: GET_OVERVIEWDATA,
        payload: request
    }
}

export function overviewChgContainer(index) {
    /*
     * index => 1 : 帳戶總覽, 2 : 單筆申購, 3 : 定期定額
     */
    return {
        type: OVERVIEW_PAGE_INDEX,
        payload: index
    }
}

export function getPeriodInvestFundsList() {
    const request = axios.get(PeriodInvestFundsList_URL);

    return {
        type: GET_PEROIDINVESTFUNDSLIST,
        payload: request
    }
}