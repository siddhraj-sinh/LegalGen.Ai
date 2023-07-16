import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResearchDashboardComponent } from './pages/research-dashboard/research-dashboard.component';
import { AdvanceFiltersComponent } from './pages/advance-filters/advance-filters.component';
import { authGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent,
    pathMatch:'full'
   },
  {
    path: "home",
    component: HomeComponent,
    canActivate:[authGuardGuard]
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:"dashboard",
    component:ResearchDashboardComponent,
    canActivate:[authGuardGuard]
  },
  {
    path:"filter",
    component:AdvanceFiltersComponent
  },
  {
    path:"**",
    component:LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
