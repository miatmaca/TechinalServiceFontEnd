import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'app/models/customer';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(value: Customer[], filterText:string ): Customer[] {

    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Customer)=>p.gsm.toLocaleLowerCase().indexOf(filterText)!==-1 
                                || (p.firstName.toLocaleLowerCase().indexOf(filterText)!==-1)  
                                ||(p.lastName.toLocaleLowerCase().indexOf(filterText)!==-1)):value;
  }
}
