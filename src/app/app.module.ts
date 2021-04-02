import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { HeaderComponent } from './components/header/header.component';
import { SiedbarComponent } from './components/siedbar/siedbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusinussModule } from './businuss/businuss.module';
import { HttpClientModule } from '@angular/common/http';
import { StaticsComponent } from './components/statics/statics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StaticsComponent,
    AppComponent,
    HeaderComponent,
    SiedbarComponent,
    DashboardComponent,
    SettingComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BusinussModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
