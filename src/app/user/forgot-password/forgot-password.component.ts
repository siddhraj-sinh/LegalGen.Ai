import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;
  successMessage?: string;
  errorMessage?: string;

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  get f() { return this.forgotPasswordForm.controls; }
  onSubmit() {
    console.log( this.forgotPasswordForm.controls['email'].value); 
   
    this.userService.forgotPassword(this.forgotPasswordForm.controls['email'].value).subscribe(
      () => {
        this.successMessage = 'A password reset email has been sent to your email address.';
        this.errorMessage = '';
        this.forgotPasswordForm.reset();
      },
      (error) => {
        this.successMessage = '';
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );

    
  }
  getControl(name:any):AbstractControl | null{
    return this.forgotPasswordForm.get(name);
  }
}

