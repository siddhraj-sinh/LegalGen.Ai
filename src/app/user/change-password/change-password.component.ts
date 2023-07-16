import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  
  updatePasswordForm!:FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.updatePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit():void{
   console.log(this.updatePasswordForm.value)
   const { newPassword,currentPassword } = this.updatePasswordForm.value;
    this.userService.resetPassword(currentPassword,newPassword).subscribe((res)=>{
       // Handle success
       this.toastr.success('Password changed successfully!', 'Success', {
        timeOut: 1800,        // Duration in milliseconds
        extendedTimeOut: 500, // Duration after hovering over the toastr
        closeButton: true,    // Display close button
        tapToDismiss: false   // Dismiss on click
      });  
      this.router.navigate(['/dashboard'])
    })
  }
  getControl(name:any):AbstractControl | null{
    return this.updatePasswordForm.get(name);
  }
}
