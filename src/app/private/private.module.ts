import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../share/share.module';
import { PrivateRoutingModule } from './private-routing.module';

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
