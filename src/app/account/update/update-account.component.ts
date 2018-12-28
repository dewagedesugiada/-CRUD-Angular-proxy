import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  
  @Input()
  account : Account ;

  @Output()
  result = new EventEmitter();
  
  accountForm : FormGroup
  constructor(private dataSercive : AccountService, private fb : FormBuilder ,private router : Router) { }

  ngOnInit() {
    this.accountForm = this.fb.group({
      accountNumber : [''],
      openDate : ['',Validators.required],
      balance : ['',Validators.required],
      customer : ['', Validators.required]
  });

  if(this.account){
    this.accountForm.controls['accountNumber'].setValue(this.account.accountNumber);
      this.accountForm.controls['openDate'].setValue(this.account.openDate);
      this.accountForm.controls['balance'].setValue(this.account.balance);
      this.accountForm.controls['customer'].setValue(this.account.customer ? this.account.customer : "");
    }

  }

  submitData(){
    let account : Account = new Account();
    account.accountNumber=this.accountForm.controls['accountNumber'].value ;
    account.openDate=this.accountForm.controls['openDate'].value ;
    account.balance=this.accountForm.controls['balance'].value;

    account.customer=this.accountForm.controls['customer'].value;

    this.dataSercive.updateCust(account).subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);

    }, (err)=>{
      alert("Error "+ JSON.stringify(err));
    });
  }

  cancel(){
    this.result.emit(true);
  }
  

  

}
