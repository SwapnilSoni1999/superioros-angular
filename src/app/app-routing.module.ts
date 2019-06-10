import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { DeviceDownloadComponent } from './device-download/device-download.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'downloads/pie', children: [
    { path: '', component: DownloadpageComponent },
    { path: ':id', component: DeviceDownloadComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
