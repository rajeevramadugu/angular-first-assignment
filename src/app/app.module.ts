import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageSuccessComponent } from './message-success/message-success.component';
import { MessageErrorComponent } from './message-error/message-error.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageSuccessComponent,
    MessageErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
