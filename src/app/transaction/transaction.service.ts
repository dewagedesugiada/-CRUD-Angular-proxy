import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './list-transaction/transaction';
import { Observable } from 'rxjs';
import { CommonResponse } from '../shared/model/common-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http : HttpClient) { }
  ParenUri = 'http://localhost:7000/api/';

  getTransaction(accountNumber):Observable<CommonResponse>{
    let uri ;
    if(accountNumber != undefined){
      uri = this.ParenUri + 'transaction/list?accountNumber=' +accountNumber ;
    }else{
      uri = this.ParenUri + 'transaction/list';
    }
    return this
    .http
    .get<CommonResponse>(uri);
  }

  insertTrans(transaction : Transaction){
    const uri = this.ParenUri + 'transaction' ;
    return this
    .http
    .post(uri, transaction);
  }

  deleted(idTransaction){
    const uri = this.ParenUri + 'transaction/ ' + idTransaction ;
    return this
    .http
    .delete(uri);
  }

  updateTrans(transaction : Transaction){
    const uri = this.ParenUri + 'transaction' ;
    return this
    .http
    .put(uri, transaction);
  }
}
