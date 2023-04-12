import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './share/share.module';
import { DashboardComponent } from './private/components/dashboard/dashboard.component';
import { LoginComponent } from './public/components/login/login.component';
import { DialogBuyComponent } from '../app/private/components/dialog-buy/dialog-buy.component';
import { DialogSellComponent } from '../app/private/components/dialog-sell/dialog-sell.component';
import { AuthGuard } from './share/guard/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DialogBuyComponent,
    DialogSellComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
