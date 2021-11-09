import { Pipe, PipeTransform } from '@angular/core';
import { CommonDto } from 'app/models/commondto';

@Pipe({
  name: 'commonfilterPipe'
})
export class CommonfilterPipe implements PipeTransform {

  transform(value: CommonDto[],filterText:string): CommonDto[] {
  
    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:CommonDto)=>p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1 
                                || (p.customerFirstName.toLocaleLowerCase().indexOf(filterText)!==-1)  
                                ||(p.customerLastName.toLocaleLowerCase().indexOf(filterText)!==-1)
                                || (p.customerGsm.toLocaleLowerCase().indexOf(filterText)!==-1) 
                                || (p.serialNo.toLocaleLowerCase().indexOf(filterText)!==-1) ):value;
  }

}
