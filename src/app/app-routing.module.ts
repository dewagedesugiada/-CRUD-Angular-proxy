import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { UpdateAccountComponent } from './account/update/update-account.component';
import { ListTransComponent } from './transaction/list-transaction/list-trans.component';
import { CreateTransComponent } from './transaction/create/create-trans.component';

const routes: Routes = [
  {
    path : 'customer', component : CustomerListComponent
  },

  {
    path : 'add_customer', component : CreateCustomerComponent
  },
  {
    path : 'account', component : AccountListComponent
  },
  {
    path : 'add_account', component : CreateAccountComponent
  },
  {
    path : 'edit_account', component : UpdateAccountComponent
  },
  {
    path : 'transaction', component : ListTransComponent
  },
  {
    path : 'add_transaction', component : CreateTransComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
