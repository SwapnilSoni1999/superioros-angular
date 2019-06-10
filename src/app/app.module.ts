import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderMainComponent } from './header-main/header-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { HomepageComponent, DialogOverviewExampleDialog, InfoPanelDialog } from './homepage/homepage.component';
import { DownloadpageComponent } from './downloadpage/downloadpage.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceDownloadComponent } from './device-download/device-download.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HomepageComponent,
    DownloadpageComponent,
    DialogOverviewExampleDialog,
    InfoPanelDialog,
    DeviceDownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
