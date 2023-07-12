import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ResearchDashboardComponent } from './pages/research-dashboard/research-dashboard.component';
import { AdvanceFiltersComponent } from './pages/advance-filters/advance-filters.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent,
    pathMatch:'full'
   },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:"dashboard",
    component:ResearchDashboardComponent
  },
  {
    path:"filter",
    component:AdvanceFiltersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
