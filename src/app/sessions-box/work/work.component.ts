import { Component, OnInit } from '@angular/core';
import {FormatTimeService} from 'src/app/format-time.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [FormatTimeService]
})
export class WorkComponent implements OnInit {
  title= "Work";
  workoutTime = 20;

  increaseWorkout() {
    if (this.workoutTime < 300) {
        this.workoutTime= this.workoutTime + 20
      }
      console.log("work+")
    }

  // increaseWorkout() {
  //   if (this.state.workoutTime < 300 && !this.state.isStart) {
  //     this.setState({
  //       workoutTime: this.state.workoutTime + 20,
  //       totalTime:
  //         (this.state.setsLength *
  //           (this.state.workoutTime + 20 + this.state.breakTime) +
  //           this.state.preparationTime) *
  //         this.state.sessionLength
  //     });
  //   }
  // }

  decreaseWorkout() {
    if (this.workoutTime >20) {
      this.workoutTime = this.workoutTime - 20
    }
    console.log("work-")
  }

  // decreaseWorkout() {
  //   if (this.state.workoutTime > 20 && !this.state.isStart) {
  //     this.setState({
  //       workoutTime: this.state.workoutTime - 20,
  //       totalTime:
  //         this.state.setsLength *
  //         (this.state.workoutTime - 20 + this.state.breakTime) +
  //         this.state.preparationTime * this.state.sessionLength
  //     });
  //   }
  // }

  constructor(private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.workoutTime))
  }

}
