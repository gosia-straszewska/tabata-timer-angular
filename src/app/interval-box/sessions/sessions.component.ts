import { Component, OnInit } from '@angular/core';
import { FormatTimeService } from 'src/app/format-time.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent implements OnInit {
  title = "Sessions"

  constructor( private formatTime: FormatTimeService ) { }

  ngOnInit() {
  }

}
