import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneListContainerModule } from './phone-list-container/phone-list-container.module';
import { AboutComponent } from './about/about.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EditPhoneModule } from './edit-phone/edit-phone.module';

// Material components modules
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthModule } from './auth/auth.module';
import { GuestViewComponent } from './guest-view/guest-view.component';
@NgModule({
  declarations: [AppComponent, AboutComponent, NavigationBarComponent, GuestViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    PhoneListContainerModule,
    EditPhoneModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
