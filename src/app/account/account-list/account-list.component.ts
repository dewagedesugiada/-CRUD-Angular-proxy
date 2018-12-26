import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor( private dataService : AccountService, private router : Router ) { }
  
  account : Account [] = [] ;
  showDetail : boolean = false ;
  selectedAccount : Account = new Account() ;
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getAccount().subscribe(res=>{
      Object.assign(this.account, res);
      console.log(this.account);
      
    },err=>{
      console.log('error'+ JSON.stringify(err)) ;
      
    })
  }

  deleted(accountNumber){
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // this.dataService.deleteCust(accountNumber).subscribe(res=>{
        //   // this.loadData();
        //   location.reload();
        // })
        Swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        .then((ok)=>{
          this.dataService.deleteCust(accountNumber).subscribe(res=>{
            // this.loadData();
            location.reload();
          },err=>{
            alert(err);
          });
  
         });
      }
    })
  }

  selectAccount(account : Account){
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer_number = account.customer_number;
    this.selectedAccount = copyAccount ;
    this.showDetail = true ; 
  }

  prosesResult(result){
    if(result){
      this.showDetail =false ;
      this.loadData() ;
    }
  }
  editData(account : Account){
    this.router.navigate(['/edit_account',{accountNumber : account.accountNumber}]);
  }
}
