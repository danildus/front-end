import { Component, OnInit} from '@angular/core';
import {DemoService} from '../demo.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  public student;


  ngOnInit() {
    let students = this.demoService.getStudents().subscribe(student => this.student = student);
    //debugger;
  }



}
