import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  constructor(private curentPipe : CurrencyPipe){}

  transform(value: any, currency : string, symbol:boolean =false):  string {
    if(value!=null)
    return this.curentPipe.transform(value, "Rp. ",symbol);
    return this.curentPipe.transform(value,currency,symbol).split('00')['0'];
  }

}
