import { Pipe, PipeTransform } from '@angular/core';
import { Oem } from 'app/models/oem';

@Pipe({
  name: 'filterOemPipe'
})
export class FilterOemPipe implements PipeTransform {

  transform(value: Oem[], filterText:string ): Oem[] {

    filterText=filterText? filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:Oem)=>p.OemName.toLocaleLowerCase()) :value;
   
  }
}
