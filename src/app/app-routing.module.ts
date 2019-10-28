import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { DeviceDownloadComponent } from './device-download/device-download.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'downloads/pie', children: [
    { path: '', component: DownloadpageComponent },
    { path: ':id', component: DeviceDownloadComponent }
  ] },
  { path:'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
