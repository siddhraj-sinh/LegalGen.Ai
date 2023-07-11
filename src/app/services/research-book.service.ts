import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {
  url = 'https://localhost:7024/api/ResearchBooks';
  constructor(private http:HttpClient) { }

  addBook(book:any): Observable<any>{
     return this.http.post(this.url,book);
  }
}
