import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  @Input()
  customer : Customer;

  @Output()
  result = new EventEmitter ;

  angForm : FormGroup
  constructor( private dataService : CustomerServiceService, private fb : FormBuilder ) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      customerNumber : [''],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      birthDate : ['' ,Validators.required],
      phoneNumber : ['', Validators.required]
    });
    if(this.customer){
      this.angForm.controls['customerNumber'].setValue(this.customer.customerNumber);
      this.angForm.controls['firstName'].setValue(this.customer.firstName);
      this.angForm.controls['lastName'].setValue(this.customer.lastName);
      this.angForm.controls['birthDate'].setValue(this.customer.birthDate);
      this.angForm.controls['phoneNumber'].setValue(this.customer.phoneNumber);
    }

  }

  submitData(){
    let customer : Customer = new Customer();
    customer.customerNumber = this.angForm.controls['customerNumber'].value; 
    customer.firstName = this.angForm.controls['firstName'].value; 
    customer.lastName = this.angForm.controls['lastName'].value; 
    customer.birthDate = this.angForm.controls['birthDate'].value; 
    customer.phoneNumber = this.angForm.controls['phoneNumber'].value; 

    this.dataService.update(customer).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    },err => {
      alert("Error " + JSON.stringify(err));
    });
    
  }

}
