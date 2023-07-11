import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-research-dashboard',
  templateUrl: './research-dashboard.component.html',
  styleUrls: ['./research-dashboard.component.css']
})
export class ResearchDashboardComponent implements OnInit{

  userName!:string;
  queries: any[] = [
    {
      title: "Query 1",
      creationDate: "2023-07-10"
    },
    {
      title: "Query 2",
      creationDate: "2023-07-09"
    },
    {
      title: "Query 3",
      creationDate: "2023-07-08"
    },
    
    {
      title: "Query 4",
      creationDate: "2023-07-08"
    },
    {
      title: "Query 5",
      creationDate: "2023-07-08"
    }
    ,
    {
      title: "Query 6",
      creationDate: "2023-07-08"
    }
    ,
    {
      title: "Query 7",
      creationDate: "2023-07-08"
    }
  ];
  
  constructor(private userService:UserService,private router:Router){
    this.userName="siddhraj"
  }
  ngOnInit(): void {
   this.userService.getUserByToken().subscribe((res)=>{
    this.userName=res.firstName;
   })
  }

  logout(){
    this.userService.logout().subscribe((res)=>{
      this.userService.removeToken();
      this.router.navigate(['/user/signin']);
    },(error)=>{
      console.log('Logout error',error);
    })
  }
  navigateToUpdateProfile(){
    this.router.navigate(['user/update-profile'])
  }
}
