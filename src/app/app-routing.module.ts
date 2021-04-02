import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustrialAddComponent } from './businuss/components/industrial-add/industrial-add.component';
import { IndustrialComponent } from './businuss/components/industrial/industrial.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';


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
