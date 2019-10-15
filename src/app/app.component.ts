import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DemoService} from './demo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//implements OnInit
export class AppComponent  {
  title = 'myapp';
  currentItem = 'Television';
  //public student;
  //constructor(private demoService: DemoService) { }

  //ngOnInit() {
    //let students = this.demoService.getStudents().subscribe();
    //debugger;
  //}


}
