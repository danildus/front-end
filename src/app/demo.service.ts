import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

  constructor(private httpClient: HttpClient) { }

  public getStudents() {
    return this.httpClient.get('http://localhost/myapp/src/api/index.php');
  }
}
