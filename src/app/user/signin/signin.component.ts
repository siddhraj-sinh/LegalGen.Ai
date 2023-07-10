import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router) {}

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit(): void {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      // Add your sign-in logic here, such as calling an authentication service
      console.log('Email:', email);
      console.log('Password:', password);


      this.userService.login(email,password);
    //  this.userService.loginUser(email,password) .subscribe(isValid => {
    //   if (isValid) {
    //     console.log('Sign-in successful');
    //     this.router.navigateByUrl("/home");
    //     // Redirect or perform any additional actions
    //   } else {
    //     console.log('Invalid credentials');
    //     // Handle invalid credentials, show error message, etc.
    //   }
    // });;

    }
  }
  getControl(name:any):AbstractControl | null{
    return this.signinForm.get(name);
  }
}


