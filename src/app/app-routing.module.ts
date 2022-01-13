import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container/phone-list-container.component';

export const ABOUT_PATH = 'about';
export const PHONES_PATH = 'phones';
export const LOGIN_PATH = 'login';

const routes: Routes = [
  {
    path: ABOUT_PATH,
    component: AboutComponent,
  },
  {
    path: PHONES_PATH,
    component: PhoneListContainerComponent,
  },
  {
    path: LOGIN_PATH,
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
