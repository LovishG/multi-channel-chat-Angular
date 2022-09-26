import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageBody } from '../models/message';
import { AppService } from './app.service';

@Injectable()
export class UserService {
  message$: Observable<Message>;

  constructor(private appService: AppService) {
    this.message$ = appService.message$;
  }

  getAllChannels() {
    return this.appService.getChannels();
  }

  joinChannel(name: string, userId: number) {
    return this.appService.joinChannel(name, userId);
  }

  getMyMessages(channelName: string, userId: number) {
    return this.appService.getMessages().filter(message => message.body.channel === channelName);;
  }

  sendMessage(userId: number, content: string, channelName: string) {
    let message: MessageBody = {
      sender: userId,
      content: content,
      channel: channelName
    }
    console.log(message);
    this.appService.broadcastMessage(message);
  }
}
