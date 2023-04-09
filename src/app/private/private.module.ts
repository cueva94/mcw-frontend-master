import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../share/share.module';

@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ], 
})
export class PrivateModule { }
