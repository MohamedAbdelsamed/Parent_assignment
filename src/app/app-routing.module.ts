import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/components/user-list/user-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch : 'full'},

  {path: 'login', component: LoginComponent},

  {path: 'user-list', component: UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
