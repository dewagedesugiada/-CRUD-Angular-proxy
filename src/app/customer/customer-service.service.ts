import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { CommonResponse } from '../shared/model/common-response';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  ParentUri = 'http://localhost:7000/api/' ;

  getCustomer():Observable<CommonResponse>{
    const uri = this.ParentUri + 'customer/list' ;
    // const uri = this.ApiJava + 'customer' ;
    return this
    .http
    .get<CommonResponse>(uri);
  }

  insertCustomer(customer : Customer){
    const uri = this.ParentUri +'customer';
    return this
    .http
    .post(uri,customer);
  }

  deleteCust(customerNumber){
    const uri = this.ParentUri + 'customer/' + customerNumber ;
    return this
    .http
    .delete(uri)
  }

  update(customer : Customer){
    const uri = this.ParentUri +'customer';
    return this
    .http
    .put(uri,customer);
  }
}
