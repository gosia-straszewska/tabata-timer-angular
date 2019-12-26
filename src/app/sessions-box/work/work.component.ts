import { Component, OnInit } from '@angular/core';
import {FormatTimeService} from 'src/app/format-time.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  title= "Work";
  
  increaseWorkout() {
    this.formatTime.increaseWorkout();
    }

  decreaseWorkout() {
    this.formatTime.decreaseWorkout();
  }

  constructor(private formatTime: FormatTimeService) { }
  
  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.formatTime.timers.workoutTime))
  }

}
