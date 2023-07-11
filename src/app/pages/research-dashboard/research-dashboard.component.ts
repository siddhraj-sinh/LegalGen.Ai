import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-research-dashboard',
  templateUrl: './research-dashboard.component.html',
  styleUrls: ['./research-dashboard.component.css']
})
export class ResearchDashboardComponent {

  userName!:string;
  constructor(private userService:UserService,private router:Router){
    this.userName="siddhraj"
  }
  logout(){
    this.userService.logout().subscribe((res)=>{
      this.router.navigate(['/user/signin']);
    },(error)=>{
      console.log('Logout error',error);
    })
  }
  navigateToUpdateProfile(){
    this.router.navigate(['user/update-profile'])
  }
}
