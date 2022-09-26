import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { ChatComponent } from './chats/chat.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './messages/message.component';
import { ConvertTimeToStringPipe } from './shared/convert-time-to-string.pipe';
import { GetUserNamePipe } from './shared/get-user-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    MessageComponent,
    ConvertTimeToStringPipe,
    GetUserNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
