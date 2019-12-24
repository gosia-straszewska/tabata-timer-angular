import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  title = "Sessions"
  sessions = 1;

  constructor() { }

  ngOnInit() {
  }

}
