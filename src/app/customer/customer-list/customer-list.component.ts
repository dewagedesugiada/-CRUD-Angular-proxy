import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Customer } from '../customer';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Swal from 'sweetalert2'
import { ok } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private dataService : CustomerServiceService, private router : Router) {}

  customer : Customer[] = [];
  showDetail : boolean = false ;
  selectedCustomer : Customer = new Customer() ;

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.dataService.getCustomer().subscribe(res=>{
      console.log(JSON.stringify(res.values));
      Object.assign(this.customer, res.values);
      
    },err =>{
      console.log('error'+ JSON.stringify(err));
      
    });
  }
  
  deleteCust(customerNumber){
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
        this.dataService.deleteCust(customerNumber).subscribe(res=>{
          location.reload(); 
        },err=>{
          alert(err);
        });

       });
      }
     
    })

    }


    selectCustomer(customer: Customer) {

      let copyCustomer = new Customer();
      copyCustomer.customerNumber = customer.customerNumber ;
      copyCustomer.firstName = customer.firstName ;
      copyCustomer.lastName = customer.lastName ;
      copyCustomer.birthDate = customer.birthDate ;
      copyCustomer.username = customer.username ;
      copyCustomer.password = customer.password ;
      copyCustomer.phoneType = customer.phoneType ;
      copyCustomer.phoneNumber = customer.phoneNumber ;
      this.selectedCustomer = copyCustomer ;
      this.showDetail = true ;
      
      
    }

    prosesResult(result){
      if(result){
        this.showDetail =false ;
        this.loadData() ;
      } 
     }

     showAccount(customer : Customer){
      this.router.navigate(['/account', {customerNumber : customer.customerNumber} ]);
     }
     

  }
