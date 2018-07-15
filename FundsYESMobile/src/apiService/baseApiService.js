import React , { Component } from 'react';
import axios from 'axios';

export default class baseApiService extends Component{

  constructor(props) {
    super(props);
    // 原本在 componentWillMount 操作的動作可以放在這
  }

  get = (url , parameter , callBack) => {

    if(url == undefined || url == null)
      showMsg('系統錯誤:未傳入api位置');

    if(parameter != undefined && parameter != null && Object.keys(parameter).length > 1){
      axios.get(url, { params: parameter })
        .then(function(response){

          if(checkResponse(response))
          {
              if(callback != undefined && response.data != null && response.data != undefined && Object.keys(parameter).length > 1)
                callBack(response);
              else if (callback != undefined)
                callback();
          }
        })
        .catch(catchError);
    }

  }


  showMsg = (msg) => {
    alert(msg);
  }

  checkResponse = (response) => {
    //showMsg("系統錯誤 : XXXXXX");
    return true;
  }

  catchError = (error) => {
    showMsg("系統錯誤 : XXXXXX");
  }


}
