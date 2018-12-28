import { Account } from 'src/app/account/account';

export class Transaction{
    idTransaction : number ;
    type : string ;
    amount : string ;
    amountSign : string ;
    account : Account ;
}