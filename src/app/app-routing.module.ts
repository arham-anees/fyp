import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './userAuthentication/login/login.component';
import { SignupComponent } from './userAuthentication/signup/signup.component';
import { DashboardComponent as adminDashboard } from './user/admin/dashboard/dashboard.component';
import { DashboardComponent as userDashboard }from './user/developer/dashboard/dashboard.component';
import { ViewChangesComponent } from './user/view-changes/view-changes.component';
import { UploadFilesComponent } from './user/developer/upload-files/upload-files.component';


const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path:'dashboard?admin', component:adminDashboard},
  { path:'dashboard?developer',component:userDashboard},
  { path:'changes', component:ViewChangesComponent},
  { path:'uploadfiles',component:UploadFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
