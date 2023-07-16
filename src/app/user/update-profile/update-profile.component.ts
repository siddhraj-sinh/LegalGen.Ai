import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm!:FormGroup
  user: any;

  constructor(private userService:UserService,private router:Router,private toastr:ToastrService){
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName:  new FormControl('',Validators.required),
      organization:  new FormControl('',Validators.required),
      contactDetails:  new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });

   // this.getCurrentUser();
  }
  ngOnInit(): void {
    this.userService.getUserByToken().subscribe((res)=>{
      this.user=res;
      console.log(res);
      this.updateProfileForm.patchValue({
        id:res.id,
        email:res.email,
        password:res.password,
        firstName: this.user.firstName,
        lastName:this.user.lastName,
        organization:this.user.organization,
        contactDetails: this.user.contactDetails
      });
     })
  }
  getCurrentUser() {
   
    this.userService.getUserById(this.user.id).subscribe((res)=>{
      console.log(res);
        this.user=res;
        console.log(this.user);
        this.updateProfileForm.patchValue({
          firstName: this.user.firstName,
          lastName:this.user.lastName,
          organization:this.user.organization,
          contactDetails: this.user.contactDetails
        });
      
    })
  }

  getControl(name:any):AbstractControl | null{
    return this.updateProfileForm.get(name);
  }

  onSubmit(){
    const updatedUser = {
      id:this.user.id,
        email:this.user.email,
        password:this.user.password,
      firstName: this.updateProfileForm.value.firstName,
      lastName: this.updateProfileForm.value.lastName,
      organization: this.updateProfileForm.value.organization,
      contactDetails:this.updateProfileForm.value.contactDetails,
      accessToken:this.userService.getToken() 
    };
    console.log(updatedUser);
    this.userService.updateUserDetails(this.user.id,updatedUser).subscribe(() => {
      // Handle success
      this.toastr.success('Profile updated successfully!', 'Success', {
        timeOut: 1800,        // Duration in milliseconds
        extendedTimeOut: 500, // Duration after hovering over the toastr
        closeButton: true,    // Display close button
        tapToDismiss: false   // Dismiss on click
      });  
      this.router.navigate(['/dashboard']);
      console.log('Profile updated successfully!');
    });
  }
}
