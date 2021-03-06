import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import IsAuthenticated from './features/auth/is-authenticated.guard';
import { LoginPageComponent } from './features/auth/login-page/login-page.component';
import { RegisterUserComponent } from './features/auth/register-user/register-user.component';
import { HomeViewComponent } from './views/home/home-view.component';
import { PhoneListContainerComponent } from './features/phone/view-phone/phone-list-container/phone-list-container/phone-list-container.component';
import { CreatePhoneFormComponent } from './features/phone/create-phone/create-phone-form/create-phone-form.component';

export const ABOUT_PATH = 'about';
export const PHONES_PATH = 'phones';
export const LOGIN_PATH = 'login';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
    canActivate: [IsAuthenticated],
    children: [
      {
        path: 'phones',
        component: PhoneListContainerComponent,
      },
      {
        path: 'create',
        component: CreatePhoneFormComponent,
      },
      {
        path: 'signout',
        pathMatch: 'full',
        redirectTo: '/login',
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
  providers: [IsAuthenticated],
})
export class AppRoutingModule {}
