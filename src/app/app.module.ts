import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionsBoxComponent } from './sessions-box/sessions-box.component';
import { PrepareComponent } from './sessions-box/prepare/prepare.component';
import { WorkComponent } from './sessions-box/work/work.component';
import { RestComponent } from './sessions-box/rest/rest.component';
import { TimerBoxComponent } from './timer-box/timer-box.component';
import { IntervalBoxComponent } from './interval-box/interval-box.component';
import { SetsComponent } from './interval-box/sets/sets.component';
import { ControlBtnsComponent } from './interval-box/control-btns/control-btns.component';
import { SessionsComponent } from './interval-box/sessions/sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionsBoxComponent,
    PrepareComponent,
    WorkComponent,
    RestComponent,
    TimerBoxComponent,
    IntervalBoxComponent,
    SetsComponent,
    ControlBtnsComponent,
    SessionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
