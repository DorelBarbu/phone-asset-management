import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditPhoneDialogComponent } from './edit-phone-dialog/edit-phone-dialog.component';
import { EditPhoneFormComponent } from './edit-phone-form/edit-phone-form.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container/phone-list-container.component';

export const ABOUT_PATH = 'about';
export const PHONES_PATH = 'phones';

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
    path: 'edit-phone',
    component: EditPhoneDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
