import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor( private dataService : AccountService, private router : Router,private route : ActivatedRoute) { }
  
  account : Account [] = [] ;
  showDetail : boolean = false ;
  selectedAccount : Account = new Account() ;
  ngOnInit() {
    this.route.params.subscribe(params=>{
      let customerNumber = params['customerNumber'];
      this.loadData(customerNumber);
    })
   
    
  }

  loadData(customerNumber?){
    this.dataService.getAccount(customerNumber).subscribe(res=>{
      console.log(this.account);
      Object.assign(this.account, res.values);
      
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
    copyAccount.customer = account.customer;
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

  showTransaction(account :  Account){
    this.router.navigate(['transaction', {accountNumber : account.accountNumber} ]);
  }
}
