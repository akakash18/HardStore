import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl='http://localhost:8081/Report/generate'

  constructor(private http:HttpClient) { }

  generateReport(): Observable<any> {
    return this.http.post(this.baseUrl, {}, {
      responseType: 'blob' as 'json' // Set the response type as 'blob' to handle binary data
    });
  }
}
