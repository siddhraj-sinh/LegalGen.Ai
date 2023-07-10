import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:7024/api/User";

  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.http.post(this.url,user);
   }

   getAllUser():Observable<any[]>{
    return this.http.get<any>(this.url);
   }
   forgotPassword(email: string): Observable<any> {
    const url = `${this.url}/forgot-password`;
    const body = { email };

    return this.http.post(url, body);
  }
}
