import { Component } from '@angular/core';
import {FormatTimeService} from './format-time.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormatTimeService],

})
export class AppComponent {
  // title = 'Tabata Timer';
}
