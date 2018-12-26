import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  angForm : FormGroup ;
  constructor(private dataService: CustomerServiceService, private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['',Validators.required],
      birthDate : ['',Validators.required],
      username : ['', Validators.required],
      password : ['',Validators.required],
      phoneType : [''],
      phoneNumber : ['', Validators.required]
    });
  }

  submitData(){
    let customer : Customer  = new Customer();
    customer.firstName = this.angForm.controls['firstName'].value;
    customer.lastName = this.angForm.controls['lastName'].value;
    customer.birthDate = this.angForm.controls['birthDate'].value;
    customer.username = this.angForm.controls['username'].value;
    customer.password = this.angForm.controls['password'].value;
    customer.phoneType = this.angForm.controls['phoneType'].value;
    customer.phoneNumber = this.angForm.controls['phoneNumber'].value;

    this.dataService.insertCustomer(customer).subscribe(res=>{
      // console.log('done');
      this.router.navigate(['/customer']);
    });

    

 
  }


}
