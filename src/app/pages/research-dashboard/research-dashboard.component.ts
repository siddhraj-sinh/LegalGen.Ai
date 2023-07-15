import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResearchBookService } from 'src/app/services/research-book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-research-dashboard',
  templateUrl: './research-dashboard.component.html',
  styleUrls: ['./research-dashboard.component.css']
})
export class ResearchDashboardComponent implements OnInit{

  userName!:string;
  isFormCardOpen: boolean = false;
  newQuery: string = '';
  user!:any;
  userId:any;
  queries!: any[];
  constructor(private userService:UserService,private router:Router,private researchService:ResearchBookService){
   
  }
  ngOnInit(): void {

   this.userService.getUserByToken().subscribe((res)=>{
    console.log(res);
    this.userName=res.firstName;
    this.user=res;
    this.userId=res.id;
  this.getAllResearchBook(res.id);

   })
  
  }

  getAllResearchBook(userId:any){
    this.researchService.getReserchByUserId(userId).subscribe((res)=>{

      console.log(res);
      this.queries=res;
     })
  }
 // Event handlers
 openFormCard() {
  this.isFormCardOpen = true;
}

closeFormCard() {
  this.isFormCardOpen = false;
}

continueQuery() {
  // Add logic to handle the query continuation
  console.log('Continuing query:', this.newQuery);
  const body = {
    name: this.newQuery,
    dateCreated: new Date(),
    lastModified: new Date(),
    userId: this.user.id
  }
  console.log(body);
 this.researchService.addBook(body).subscribe((res)=>{console.log(res);
 this.router.navigate(['/home'])
})
  this.closeFormCard();
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
  navigateToChangePassword(){
    this.router.navigate(['user/change-password'])
  }
  navigateToHome(){
    this.router.navigate(['/home'])

  }
}

