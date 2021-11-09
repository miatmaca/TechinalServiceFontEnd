import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from 'app/models/brand';
import { Customer } from 'app/models/customer';
import { ProductInfo } from 'app/models/productInfo';
import { ProductInfoDto } from 'app/models/productInfoDto';
import { filter } from 'rxjs-compat/operator/filter';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ProductInfoDto[], filterText:string ): ProductInfoDto[] {

    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:ProductInfoDto)=>p.faultName.toLocaleLowerCase().indexOf(filterText)!==-1 
                                || (p.customerName.toLocaleLowerCase().indexOf(filterText)!==-1)  
                                ||(p.gsm.indexOf(filterText)!==-1)):value;
  }

}
