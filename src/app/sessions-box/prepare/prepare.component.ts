import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-prepare',
  templateUrl: './prepare.component.html',
  styleUrls: ['./prepare.component.css'],
})
export class PrepareComponent implements OnInit {
  title= "Prepare";


  increasePreparation() {
    this.formatTime.increasePreparation();
  }

  decreasePreparation(){
    this.formatTime.decreasePreparation();
  }

  constructor(private formatTime: FormatTimeService) { }

  ngOnInit() {
    console.log(this.formatTime.formatTimer(this.formatTime.timers.preparationTime))
  }

}
