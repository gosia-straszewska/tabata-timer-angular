import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
  providers: [FormatTimeService]
})
export class RestComponent implements OnInit {
  title = "Rest";
  restTime = 10;
  
  increaseRest(event) {
    if(this.restTime < 300){
      this.restTime = this.restTime + 10
    }
    console.log("rest+")
  }

  // increaseBreak() {
  //   if (this.state.breakTime < 300 && !this.state.isStart) {
  //     this.setState({
  //       breakTime: this.state.breakTime + 10,
  //       totalTime:
  //         (this.state.setsLength *
  //           (this.state.workoutTime + (this.state.breakTime + 10)) +
  //           this.state.preparationTime) *
  //         this.state.sessionLength
  //     });
  //   }
  // }

  decreaseRest(event){
    if(this.restTime > 10){
      this.restTime = this.restTime - 10
    }
    console.log("rest-")
  }

  // decreaseBreak() {
  //   if (this.state.breakTime > 10 && !this.state.isStart) {
  //     this.setState({
  //       breakTime: this.state.breakTime - 10,
  //       totalTime:
  //         this.state.setsLength *
  //         (this.state.workoutTime + (this.state.breakTime - 10)) +
  //         this.state.preparationTime * this.state.sessionLength
  //     });
  //   }
  // }


  constructor ( private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.restTime))
  }

}
