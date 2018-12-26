import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }
  ParenUri = 'http://localhost:3000/';

  getAccount(){
    const uri = this.ParenUri + 'accounts' ;
    return this
    .http
    .get(uri);
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
