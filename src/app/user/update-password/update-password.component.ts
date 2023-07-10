import { Component } from '@angular/core';
import{AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators,ValidatorFn, ValidationErrors}from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  updateForm!: FormGroup;
  successMessage?: string;
  errorMessage?: string;
  token!:string;
  constructor(private formBuilder: FormBuilder,private router:ActivatedRoute,private userService:UserService) {
   
    this.token = this.router.snapshot.params['token'];
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],    
    },
    { validators: this.passwordMatchValidator }
   );
  }
  
  getControl(name:any):AbstractControl | null{
    return this.updateForm.get(name);
  }
 
  passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const passwordControl = formGroup.get('newPassword');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }

    return null;
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const { newPassword } = this.updateForm.value;
      // Add your sign-in logic here, such as calling an authentication service
    
      this.userService.updatePassword(this.token,newPassword).subscribe((res)=>{
        this.successMessage = 'Password updated successfully.';
        this.errorMessage = '';
        this.updateForm.reset();   
      },(error)=>{
        this.successMessage = '';
        this.errorMessage = 'An error occurred. Please try again later.';
      });
    }
  }
  
}
