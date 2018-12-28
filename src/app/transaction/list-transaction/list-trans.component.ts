import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from '../transaction.service';
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-trans',
  templateUrl: './list-trans.component.html',
  styleUrls: ['./list-trans.component.css']
})
export class ListTransComponent implements OnInit {

  transaction :  Transaction [] = [];
  showDetail : boolean = false ;
  selectedTransaction : Transaction = new Transaction();

  constructor(private dataService : TransactionService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let accountNumber =  params['accountNumber'];
      this.loadData(accountNumber);
    })
  }

  loadData(accountNumber?){
    this.dataService.getTransaction(accountNumber).subscribe((res)=>{
      console.log(this.transaction);
      Object.assign(this.transaction,res.values);
      
    }, err =>{
      alert("Error "+ JSON.stringify(err));
    });
  }

  deleted(idTransaction){
    Swal({
      title: 'Are you sure ?',
      text: "Data will be permanently deleted!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      
      if (result.value) {
        Swal(
          'Deleted!',
          'Your data has been deleted.',
          'success',
        )
       .then((ok)=>{
        this.dataService.deleted(idTransaction).subscribe(res=>{
          location.reload(); 
        },err=>{
          alert(err);
        });

       });
      }
     
    })
    
  }

  selectTransaction(transaction : Transaction){
    let copytransaction = new Transaction();
    copytransaction.idTransaction = transaction.idTransaction; 
    copytransaction.type = transaction.type; 
    copytransaction.amount = transaction.amount; 
    copytransaction.amountSign = transaction.amountSign; 
    copytransaction.account = transaction.account; 

    this.selectedTransaction = copytransaction ;
    this.showDetail = true ;
    
  }

  prosesResult(result){
    if(result){
      this.showDetail=false ;
      this.loadData();
    }
  }

}
