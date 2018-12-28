import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Observable } from 'rxjs';
import { CommonResponse } from '../shared/model/common-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }
  ParenUri = 'http://localhost:7000/api/';

  getAccount(customerNumber):Observable<CommonResponse>{
    let uri ;
    if(customerNumber!=undefined){
      uri = this.ParenUri + 'account/list?customerNumber=' + customerNumber ;
    }else{
      uri = this.ParenUri + 'account/list';
    }
    return this
    .http
    .get<CommonResponse>(uri);
  }

  insertAccount(account : Account){
    const uri = this.ParenUri + 'account' ;
    return this
    .http
    .post(uri, account);
  }

  deleteCust(accountNumber){
    const uri = this.ParenUri + 'account/' + accountNumber;
    return this
    .http
    .delete(uri);
  }

  updateCust(account : Account){
    const uri = this.ParenUri + 'account' ;
    return this
    .http
    .put(uri, account);
  }

}
