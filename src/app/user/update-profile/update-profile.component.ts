import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  updateProfileForm!:FormGroup
  user: any;

  constructor(private userService:UserService,private router:Router){
    this.updateProfileForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName:  new FormControl('',Validators.required),
      organization:  new FormControl('',Validators.required),
      contactDetails:  new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    });

    this.getCurrentUser();
  }
  getCurrentUser() {
    const userId =1;
    this.userService.getUserById(userId).subscribe((res)=>{
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
    const userId =1;
    const updatedUser = {
      id:userId,
      firstName: this.updateProfileForm.value.firstName,
      lastName: this.updateProfileForm.value.lastName,
      organization: this.updateProfileForm.value.organization,
      contactDetails:this.updateProfileForm.value.contactDetails
    };
    console.log(updatedUser);
    this.userService.updateUserDetails(userId,updatedUser).subscribe(() => {
      // Handle success
      this.router.navigate(['/home']);
      console.log('Profile updated successfully!');
    });
  }
}
