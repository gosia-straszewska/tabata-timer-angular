import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css'],
})

export class SetsComponent implements OnInit {
  title = "Sets";

  increaseSets() {
    this.formatTime.increaseSets()
  }

  decreaseSets() {
    this.formatTime.decreaseSets()
  }

  constructor(private formatTime: FormatTimeService) { }

  ngOnInit() {
  }

}
