import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {
  url = 'https://localhost:7024/api/ResearchBooks';
  constructor(private http:HttpClient) { }
  public queries: any =[];
  public queryList = new BehaviorSubject<any>([]);

  addBook(book:any): Observable<any>{
    
     return this.http.post(this.url,book);
  }
  
  getAllBook():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getReserchByUserId(userId:any){
    
    const apiUrl = `${this.url}/GetResearchBooksByUserId/${userId}`;
    return this.http.get<any[]>(apiUrl);
  }
   

}
