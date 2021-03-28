import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { HeaderComponent } from './components/header/header.component';
import { SiedbarComponent } from './components/siedbar/siedbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusinussModule } from './businuss/businuss.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SiedbarComponent,
    DashboardComponent,
    SettingComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,BusinussModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
