import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../share/share.module';
import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DialogBuyComponent } from './components/dialog-buy/dialog-buy.component';

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
