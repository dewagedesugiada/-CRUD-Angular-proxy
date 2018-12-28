import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Customer } from 'src/app/customer/customer';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  customer : Object ;
  angForm :  FormGroup;
  constructor(private fb: FormBuilder, private dataService : AccountService, private router : Router) { }

  ngOnInit() {
    this.cretaForm();
  }

  cretaForm(){
    this.angForm = this.fb.group({
      openDate : [null, Validators.required ],
      balance: [null, Validators.required ],
      customer: [null, Validators.required ]
    })
  }

  submitData(){
    let account : Account = new Account();
    account.openDate=this.angForm.controls['openDate'].value ;
    account.balance=this.angForm.controls['balance'].value;

    let customer : Customer = new Customer();
    customer.customerNumber = this.angForm.controls['customer'].value ;
    account.customer = customer ;

    console.log(customer.customerNumber);
    

    this.dataService.insertAccount(account).subscribe(res=>{
    
        console.log("Done")
        this.router.navigate(["/account"]);
    })

    
  }

  setSelectedCustomer(customer : Customer){
    this.angForm.controls['customer'].setValue(customer.customerNumber);
    alert(customer.customerNumber);

    this.angForm.updateValueAndValidity();

      
  }

  back(){
    this.router.navigate(["/account"]);
  }

}
