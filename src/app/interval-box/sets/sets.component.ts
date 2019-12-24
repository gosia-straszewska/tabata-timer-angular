import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css'],
})

export class SetsComponent implements OnInit {
  title = "Sets";
  sets = 1

  increaseSets(event) {
    if(this.sets < 6){
      this.sets = this.sets + 1
    }
    console.log("sets")
  }

  decreaseSets(event) {
    if(this.sets > 1){
      this.sets = this.sets - 1
    }
    console.log("sets")
  }

  constructor() { }

  ngOnInit() {
  }

}
