import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndustrialComponent } from './businuss/industrial/industrial.component';
import { SettingComponent } from './setting/setting.component';
import { IndustrialAddComponent } from './businuss/industrial-add/industrial-add.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'industrial', component: IndustrialComponent },
  { path: 'industrial/add', component: IndustrialAddComponent },
  { path: 'industrial/edit/:id', component: IndustrialAddComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
