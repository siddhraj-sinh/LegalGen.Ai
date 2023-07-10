import { Component } from '@angular/core';
import{AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators,ValidatorFn, ValidationErrors}from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  updateForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

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
      const { email, password } = this.updateForm.value;
      // Add your sign-in logic here, such as calling an authentication service
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }
  
}
