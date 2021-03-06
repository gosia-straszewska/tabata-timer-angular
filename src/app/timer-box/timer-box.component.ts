import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-timer-box',
  templateUrl: './timer-box.component.html',
  styleUrls: ['./timer-box.component.css'],
})
export class TimerBoxComponent implements OnInit {
  activePhase = "name" //do ustawienia
  // color = {
  //   borderColor: "rgb(83, 185, 83)",
  //   color: "rgb(83, 185, 83)"
  // }
  color = this.formatTime.color
  
  // totalTime = this.formatTime.totalTime; // object - service

  constructor(private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.formatTime.timers.totalTime), this.formatTime.setWorktime());
  }
}


