import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.service';

@Pipe({
  name: 'getUserName'
})
export class GetUserNamePipe implements PipeTransform {

  constructor(private appService: AppService) {}

  transform(userId: number): string {
    let user = this.appService.getUsers().find(user => user.id === userId);

    if(user) return user.name;

    return '';
  }

}
