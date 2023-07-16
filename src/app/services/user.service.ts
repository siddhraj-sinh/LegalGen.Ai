import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://localhost:7024/api/User';
  private currentUserKey = 'currentUser';
  constructor(private http: HttpClient,private router:Router,private toastr:ToastrService) {}

  addUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }


  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getUserByToken(): Observable<any> {
    const url = `${this.url}/user/by-token`;
    
    // Get the access token from the local storage
    const token = localStorage.getItem('accessToken');
    
    // Create headers and add the token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    
    // Make a GET request to the user endpoint with headers
    return this.http.get<any>(url, { headers: headers });
  }
  

  signin(email: string, password: string): Observable<any> {
    const url = `${this.url}/signin`;
    const body = {
      email: email,
      password: password
    };

    return this.http.post(url, body);
  }
  saveToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  removeToken(): void {
    localStorage.removeItem('accessToken');
  }
  isLoggedIn(): boolean {
    return !!this.getToken(); // Check if user ID exists in local storage
  }
  login(email: string, password: string): void {
    this.signin(email, password).subscribe(
      (response) => {
        const token = response.accessToken;
        this.saveToken(token);
        this.toastr.success('Successfully logged in!', 'Welcome', {
          timeOut: 1800,        // Duration in milliseconds
          extendedTimeOut: 500, // Duration after hovering over the toastr
          closeButton: true,    // Display close button
          tapToDismiss: false   // Dismiss on click
        });  
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log('Login failed.'); // Handle error
        this.toastr.error('Please try again!', 'Login failed.', {
          timeOut: 1800,        // Duration in milliseconds
          extendedTimeOut: 500, // Duration after hovering over the toastr
          closeButton: true,    // Display close button
          tapToDismiss: false   // Dismiss on click
        });  
     
      }
    );
  }
  logout(): Observable<any> {
    const url = `${this.url}/signout`;
  
    // Get the access token from the local storage
    const token = localStorage.getItem('accessToken');
  

    // Create headers and add the token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  
    alert("Are you sure want to signout ?")
    this.toastr.success('Successfully logged out!', 'Goodbye', {
      timeOut: 1800,        // Duration in milliseconds
      extendedTimeOut: 500, // Duration after hovering over the toastr
      closeButton: true,    // Display close button
      tapToDismiss: false   // Dismiss on click
    });  
    // Make a POST request to the logout endpoint with headers
    return this.http.post(url, null, { headers: headers });
  }
  

  loginUser(email: string, password: string): Observable<boolean> {
    interface User {
      id: number;
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      organization: string;
      contactDetails: string;
    }
    return this.http.get<User[]>(this.url).pipe(
      map((users: User[]) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          localStorage.setItem(this.currentUserKey, user.id.toString()); // Store user ID in local storage
          return true;
        } else {
          return false;
        }
      })
    );
  }
  getAllUser(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }

  updateUserDetails(userId: number, updatedUser: any): Observable<any> {
    const url = `${this.url}/${userId}`;
    alert('are you sure want to update your profile details ?')
    return this.http.put(url, updatedUser);
  }


  //password
  forgotPassword(email: string): Observable<any> {
    const url = `${this.url}/forgot-password?email=${email}`;
    const body = {};

    return this.http.post(url, body);
  }
  updatePassword(token: string, password: string): Observable<any> {
    const url = `${this.url}/update-password`;
    const body = {
      token: token,
      password: password,
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(body);
    return this.http.post(url, body, { headers: headers });
  }
  resetPassword(CurrentPassword: string,NewPassword: string){
    const url = `${this.url}/reset-password`;
    const body = {
      token: this.getToken(),
      currentPassword: CurrentPassword,
      newPassword:NewPassword
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(body);
    return this.http.post(url, body, { headers: headers });
  }
}
