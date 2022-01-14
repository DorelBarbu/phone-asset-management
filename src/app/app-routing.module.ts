import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import IsAuthenticated from './auth/is-authenticated.guard';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { CreatePhoneComponent } from './create-phone/create-phone.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container/phone-list-container.component';

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
        component: CreatePhoneComponent,
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
