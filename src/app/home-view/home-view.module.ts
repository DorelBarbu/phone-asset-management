import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { NavigationBarModule } from '../common/navigation-bar/navigation-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeViewComponent],
  imports: [CommonModule, NavigationBarModule, RouterModule],
  exports: [HomeViewComponent],
})
export class HomeViewModule {}
