import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { RegisterComponent } from './Page/register/register.component';
import { ProfileComponent } from './Page/profile/profile.component';
import { AuthGuard } from './Services/authGuard.service';
import { Branch1Component } from './Page/branch1/branch1.component';
import { NewStoryComponent } from './Page/new-story/new-story.component';
import { YourstoryComponent } from './Page/yourstory/yourstory.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'branch1', component: Branch1Component },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'newstory', component: NewStoryComponent, canActivate: [AuthGuard] },
  {
    path: 'yourstory',
    component: YourstoryComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
