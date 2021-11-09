import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'app/models/user';
import { filter } from 'rxjs-compat/operator/filter';

@Pipe({
  name: 'userPipe'
})
export class UserPipe implements PipeTransform {

  transform(value: User[], filterText: string): User[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:User)=>p.email.toLocaleLowerCase().indexOf(filterText)!==-1 ||
          (p.gsm.indexOf(filterText)!==-1)): value ;
  }

}

