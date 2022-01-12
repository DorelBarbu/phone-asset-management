import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { PhoneListContainerModule } from './phone-list-container/phone-list-container.module';
import { AboutComponent } from './about/about.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EditPhoneDialogComponent } from './edit-phone-dialog/edit-phone-dialog.component';
import { EditPhoneFormComponent } from './edit-phone-form/edit-phone-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationBarComponent,
    EditPhoneDialogComponent,
    EditPhoneFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    PhoneListContainerModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
