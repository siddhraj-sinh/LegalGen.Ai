import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName!:string;
  constructor(private router:Router,private userService:UserService){}
  ngOnInit(): void {
    this.userService.getUserByToken().subscribe((res)=>{
      this.userName=res.firstName;
     })
  }
  navigateToUpdateProfile(){
    this.router.navigate(['user/update-profile'])
  }
  navigateToChangePassword(){
    this.router.navigate(['user/change-password'])
  }
  logout(){
    this.userService.logout().subscribe((res)=>{
      this.userService.removeToken();
      this.router.navigate(['/user/signin']);
    },(error)=>{
      console.log('Logout error',error);
    })
  }
}
