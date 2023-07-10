import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:7024/api/User";
  private currentUserKey = 'currentUser';
  constructor(private http:HttpClient) { }

  addUser(user:any):Observable<any>{
    return this.http.post(this.url,user);
   }


   loginUser(email:string,password:string):Observable<boolean>{
    interface User {
      id:number,
      email: string,
      password: string,
      firstName: string,
      lastName: string,
      organization: string,
      contactDetails: string,
    }
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem(this.currentUserKey, user.id.toString()); // Store user ID in local storage
          return true;
        } else {
          return false;
        }
      })
    );
   }
   getAllUser():Observable<any[]>{
    return this.http.get<any>(this.url);
   }
   forgotPassword(email: string): Observable<any> {
    const url = `${this.url}/forgot-password?email=${email}`;
    const body = {  };

    return this.http.post(url, body);
  }
  updatePassword(token: string, password: string): Observable<any> {
    const url = `${this.url}/update-password`;
    const body = {
      token: token,
      password: password
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log(body);
    return this.http.post(url, body,{ headers: headers });
  }
}
