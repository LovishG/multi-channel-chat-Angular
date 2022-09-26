import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AppService } from './shared/app.service';

@Component({
  selector: 'mcr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newUser = '';
  
  users: User[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.users = this.appService.getUsers();
  }

  logInUser() {
    if(!this.newUser) return;

    this.appService.getUser(this.newUser);
    this.users = this.appService.getUsers();
    this.newUser = '';
  }

  trackUser(index: number, user: User) {
    return user.id;
  }

  logOutUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
