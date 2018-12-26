import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  ParentUri = 'http://localhost:3000/' ;

  getCustomer(){
    const uri = this.ParentUri + 'customers' ;
    return this
    .http
    .get(uri);
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
