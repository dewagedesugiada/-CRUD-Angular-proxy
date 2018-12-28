import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../list-transaction/transaction';

@Component({
  selector: 'app-update-trans',
  templateUrl: './update-trans.component.html',
  styleUrls: ['./update-trans.component.css']
})
export class UpdateTransComponent implements OnInit {

  @Input()
  transaction : Transaction ;

  @Output()
  result = new EventEmitter()
  angForm : FormGroup;
  constructor(private dataService : TransactionService, private fb : FormBuilder) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      idTransaction : [''],
      type : ['',Validators.required],
      amount : ['',Validators.required],
      amountSign : ['',Validators.required],
    });
    if(this.transaction){
      this.angForm.controls['idTransaction'].setValue(this.transaction.idTransaction);
      this.angForm.controls['type'].setValue(this.transaction.type);
      this.angForm.controls['amount'].setValue(this.transaction.amount);
      this.angForm.controls['amountSign'].setValue(this.transaction.amountSign);

    }

  }

  submitData(){
    let transaction : Transaction  = new Transaction();
    transaction.idTransaction = this.angForm.controls['idTransaction'].value;
    transaction.type = this.angForm.controls['type'].value;
    transaction.amount = this.angForm.controls['amount'].value;
    transaction.amountSign = this.angForm.controls['amountSign'].value;

    this.dataService.updateTrans(transaction).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    },err =>{
      alert('error'+ JSON.stringify(err));
    })
  }

  cancel(){
    this.result.emit(true);
  }


}

