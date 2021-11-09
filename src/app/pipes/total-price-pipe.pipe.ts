import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'app/models/customer';

@Pipe({
  name: 'totalPricePipe'
})
export class TotalPricePipePipe implements PipeTransform {

  transform(value: Customer[], filterText:string ): Customer[] {
    // return value + value*(rate/100);
    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Customer)=>p.firstName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
