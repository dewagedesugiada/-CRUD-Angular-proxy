import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Account } from 'src/app/account/account';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-combo-account',
  templateUrl: './combo-account.component.html',
  styleUrls: ['./combo-account.component.css']
})
export class ComboAccountComponent implements OnInit {

  listAccount : Account [] = []

  @Output()
  account = new EventEmitter<Account>();

  @Input()
  seletedAccount : Account ;
  constructor(private dataService : AccountService) { }

  ngOnInit() {
    this.loadData();
  }

  onChange(index){
    console.log("selected : " + index ? JSON.stringify(index) : '');
    if(this.listAccount && this.listAccount.length > 0){
      this.account.emit(this.listAccount[index]);
    }
  }

  loadData(customerNumber?){
    this.dataService.getAccount(customerNumber).subscribe(res=>{
      console.log(JSON.stringify(res));
      Object.assign(this.listAccount, res.values);
      console.log(this.listAccount);
      
    }, err => {
      alert("Error : "+ JSON.stringify(err));
    })

  }
}
