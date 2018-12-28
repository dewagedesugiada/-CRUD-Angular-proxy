import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../list-transaction/transaction';
import { Router } from '@angular/router';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-create-trans',
  templateUrl: './create-trans.component.html',
  styleUrls: ['./create-trans.component.css']
})
export class CreateTransComponent implements OnInit {
  account : Object ;
  angForm :  FormGroup
  constructor( private fb: FormBuilder, private dataService : TransactionService, private router : Router ) { }

  
  ngOnInit() {
    this.angForm = this.fb.group({
  
      type : ['', Validators.required ],
      amount: ['', Validators.required ],
      amountSign: ['', Validators.required ],
      account: ['', Validators.required ]

    });
  
  }

  submitData(){
    let transaction : Transaction = new Transaction();
    
    transaction.type=this.angForm.controls['type'].value ;
    transaction.amount=this.angForm.controls['amount'].value;
    transaction.amountSign=this.angForm.controls['amountSign'].value;

    // transaction.accountNumber =this.angForm.controls['accountNumber'].value;
    let account : Account = new Account();
    account.accountNumber = this.angForm.controls['account'].value;
    transaction.account = account ;
    
    this.dataService.insertTrans(transaction).subscribe(res=>{
    
        console.log("Done")
        this.router.navigate(["/transaction"]);
    })

  }

  setSelectedAccount(account : Account){
    this.angForm.controls['account'].setValue(account.accountNumber);
    

    this.angForm.updateValueAndValidity();

      
  }

  back(){
    this.router.navigate(['/transaction']) ;
  }


}
