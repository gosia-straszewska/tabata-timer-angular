import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';



@Component({
  selector: 'app-timer-box',
  templateUrl: './timer-box.component.html',
  styleUrls: ['./timer-box.component.css'],
  providers: [FormatTimeService]
})
export class TimerBoxComponent implements OnInit {
  activePhase = "name" //do ustawienia

  timeLeftInSecond = 180; // do ustawienia
  
  constructor( private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.timeLeftInSecond))
  }

}
