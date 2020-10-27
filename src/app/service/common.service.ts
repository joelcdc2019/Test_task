import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = 'http://localhost:44325/api';
  constructor(private http: HttpClient) { }
  getlist(): Observable<any> {
    const url = `${this.baseUrl}/employee/getlist`;
    return this.http.get(url);
  }
}
