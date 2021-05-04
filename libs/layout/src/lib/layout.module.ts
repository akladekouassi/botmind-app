import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@botmind-app/material';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
