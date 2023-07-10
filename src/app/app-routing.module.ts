import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResearchBookComponent } from './pages/research-book/research-book.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/user/signin",
    pathMatch:'full'
   },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"books",
    component:ResearchBookComponent
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
