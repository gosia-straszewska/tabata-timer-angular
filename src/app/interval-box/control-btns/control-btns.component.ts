import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-control-btns',
  templateUrl: './control-btns.component.html',
  styleUrls: ['./control-btns.component.css']
})
export class ControlBtnsComponent implements OnInit {

  start = {
    background: "rgb(219, 93, 93)",
    border: "rgb(219, 93, 93)"
  }

  stop = {
    background: "rgb(83, 185, 83)",
    border: "rgb(83, 185, 83)"
  }

  StartStop(){
    this.formatTime.onStartStop()
  }

  decreaseTotalTimer(){
    this.formatTime.decreaseTotalTimer()
  }

  onReset(){
    this.formatTime.onReset()
  }
  constructor( private formatTime: FormatTimeService) { }

  ngOnInit() {
  }
}
