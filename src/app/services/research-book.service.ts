import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {
  private apiUrl = 'api/research-books'; // Replace with the actual API endpoint

  constructor(private http: HttpClient) {}

  createResearchBook(researchBook: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, researchBook);
  }
}
