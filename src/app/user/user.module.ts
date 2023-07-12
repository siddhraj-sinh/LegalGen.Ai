import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { authGuardGuard } from '../services/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
   { path: 'signin', component: SigninComponent },
   {path:'forgot-password',component:ForgotPasswordComponent},
   {path:'reset-password/:token',component:UpdatePasswordComponent},
   {path:'update-profile',component:UpdateProfileComponent,canActivate:[authGuardGuard]},
   {path:'change-password',component:ChangePasswordComponent,canActivate:[authGuardGuard]}
];

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    UpdateProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
