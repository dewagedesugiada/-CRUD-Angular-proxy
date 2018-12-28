import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerServiceService } from './customer/customer-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule, WavesModule, InputsModule, ButtonsModule, ChartsModule } from 'angular-bootstrap-md';
import { UpdateCustomerComponent } from './customer/update/update-customer.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { ComboCustomerComponent } from './shared/componen/customer/combo-customer.component';
import { UpdateAccountComponent } from './account/update/update-account.component';
import { RupiahPipe } from './shared/pipe/rupiah.pipe'
import { CurrencyPipe } from '@angular/common';
import { ListTransComponent } from './transaction/list-transaction/list-trans.component';
import { CreateTransComponent } from './transaction/create/create-trans.component';
import { UpdateTransComponent } from './transaction/update/update-trans.component';
// Angular Animations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {NgxPaginationModule} from 'ngx-pagination';
import { ComboAccountComponent } from './shared/componen/account/combo-account.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    AccountListComponent,
    CreateAccountComponent,
    ComboCustomerComponent,
    UpdateAccountComponent,
    RupiahPipe,
    ListTransComponent,
    CreateTransComponent,
    UpdateTransComponent,
    ComboAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule,
    ChartsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule 
    
  ],
  providers: [CustomerServiceService, CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
