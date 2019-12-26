import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css'],
})

export class RestComponent implements OnInit {
  title = "Rest";
  
  increaseRest() {
    this.formatTime.increaseRest()
  }

  decreaseRest(){
    this.formatTime.decreaseRest()
  }

  constructor ( private formatTime: FormatTimeService) { }

  ngOnInit() {
  }

}
