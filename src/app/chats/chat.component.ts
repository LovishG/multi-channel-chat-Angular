import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { Channel } from '../models/channel';
import { Message } from '../models/message';
import { User } from '../models/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'mcr-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() channel!: Channel;
  @Input() user!: User;
  isMember: boolean = false;
  myMessages: Message[] = [];
  sub!: Subscription;
  newMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.sub = this.userService.message$
                .pipe(filter(message => message.body.channel === this.channel.name))
                .subscribe(message => this.receiveMessage(message));
  }

  ngOnChanges() {
    //console.log(this.user.name + ': on changes called');
    let found = false;
    this.channel.users.map(userId => {
      if(userId === this.user.id)
        found = true;
    })
    if(found) {
      this.isMember = true;
      this.initializeChat();
    }
    else this.isMember = false;
  }

  initializeChat() {
    this.myMessages = this.userService.getMyMessages(this.channel.name, this.user.id);
  }

  joinChannel() {
    this.userService.joinChannel(this.channel.name, this.user.id);
    this.isMember = true;
    this.initializeChat();
  }

  sendMessage() {
    if(!this.newMessage) return;

    this.userService.sendMessage(this.user.id, this.newMessage, this.channel.name);

    this.newMessage = '';
  }

  receiveMessage(message: Message) {
    this.myMessages.push(message);
  }
}
