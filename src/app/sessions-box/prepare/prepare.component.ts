import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css'],
  providers: [FormatTimeService]
})
export class PrepareComponent implements OnInit {
  title= "Prepare";
  preparationTime= 10;

  increasePreparation(event) {
    if(this.preparationTime<60){
      this.preparationTime = this.preparationTime + 10
    }
    console.log("click+")
  }

  // increasePreparation() {
  //   if (this.state.preparationTime < 60 && !this.state.isStart) {
  //     this.setState({
  //       preparationTime: this.state.preparationTime + 10,
  //       totalTime:
  //         (this.state.setsLength *
  //           (this.state.workoutTime + this.state.breakTime) +
  //           (this.state.preparationTime + 10)) *
  //         this.state.sessionLength,
  //       worktime: this.state.preparationTime + 10
  //     });
  //   }
  // }

  decreasePreparation(event){
    if(this.preparationTime>10){
      this.preparationTime = this.preparationTime - 10
    }
    console.log("click-")
  }

  // decreasePreparation() {
  //   if (this.state.preparationTime > 10 && !this.state.isStart) {
  //     this.setState({
  //       preparationTime: this.state.preparationTime - 10,
  //       totalTime:
  //         this.state.setsLength *
  //         (this.state.workoutTime + this.state.breakTime) +
  //         (this.state.preparationTime - 10) * this.state.sessionLength,
  //       worktime: this.state.preparationTime - 10
  //     });
  //   }
  // }

  constructor(private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.preparationTime))
  }

}
