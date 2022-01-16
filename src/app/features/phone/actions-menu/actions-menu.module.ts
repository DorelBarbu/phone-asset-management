import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsMenuComponent } from './actions-menu.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ActionsMenuComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [ActionsMenuComponent],
})
export class ActionsMenuModule {}
