import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/customer/customer';
import { CustomerServiceService } from 'src/app/customer/customer-service.service';

@Component({
  selector: 'app-combo-customer',
  templateUrl: './combo-customer.component.html',
  styleUrls: ['./combo-customer.component.css']
})
export class ComboCustomerComponent implements OnInit {

  listCustomer : Customer [] = []

  @Output()
  customer = new EventEmitter<Customer>();

  @Input()
  selectedCustomer : Customer ;
  constructor(private dataService : CustomerServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  onChange(index){
    console.log("selected : " + index ? JSON.stringify(index) : '');
    if(this.listCustomer && this.listCustomer.length > 0){
      this.customer.emit(this.listCustomer[index]);
    }
  }

  loadData(){
    this.dataService.getCustomer().subscribe(res=>{
      console.log(JSON.stringify(res));
      Object.assign(this.listCustomer, res);
    }, err => {
      alert("Error : "+ JSON.stringify(err));
    })

  }

}