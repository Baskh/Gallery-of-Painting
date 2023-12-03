import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  step = 1
  ngOnInit(): void {
  }
  next(){
    this.step++
  }
  prev(){
    this.step--
  }
}
