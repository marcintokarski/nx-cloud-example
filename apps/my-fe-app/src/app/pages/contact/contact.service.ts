import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contact/message';

  constructor(private http: HttpClient) { }

  sendContactMessage(message: any): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
}