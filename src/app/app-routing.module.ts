import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'downloads/pie', component: DownloadpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
