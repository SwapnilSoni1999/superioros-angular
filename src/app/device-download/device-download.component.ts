import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonParseService } from '../json-parse.service';

export interface BuildElement {
  date: string;
  build: string;
  size: string;
  download: any;
}

const ELEMENT_DATA: BuildElement[] = [];

@Component({
  selector: 'app-device-download',
  templateUrl: './device-download.component.html',
  styleUrls: ['./device-download.component.css']
})
export class DeviceDownloadComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Build', 'Size', 'Download'];
  dataSource;
  phun: boolean = false;
  math = Math;

  currentDevice: Object;

  constructor(private route: Router, private jsun: JsonParseService) { }

  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = this.math.floor(this.math.log(bytes) / this.math.log(1024));
    return this.math.round(bytes / this.math.pow(1024, i)) + ' ' + sizes[i];
  }

  getRouteDevice(routerUrl) {
    let devicename, FOUND=false;
    for(let i=routerUrl.length; i > 0; i--) {
      if(routerUrl[i] == '/' && !FOUND) {
        FOUND = true;
        devicename = routerUrl.slice(++i, routerUrl.length);
      }
    }
    return devicename;
  }

  ngOnInit() {

    if (navigator.userAgent.match(/Mobile/)) {
      this.phun = true;
    }

    this.jsun.getJSON('https://api.github.com/repos/SuperiorOS/official_devices/contents').subscribe(data => {
      // @ts-ignore
      for (var i = 0; i < data.length; i++) {
        if (data[i].name == 'devices.json') {
          this.jsun.getJSON(data[i].git_url).subscribe(data => {
            // @ts-ignore
            data = atob(data.content);
            var mainData;
            // @ts-ignore
            mainData = JSON.parse(data);
            for(let j=0; j < mainData.length; j++) {
              if(mainData[j].codename == this.getRouteDevice(this.route.url)) {
                //this data needs to be displayed
                this.currentDevice = mainData[j];
                console.log(this.currentDevice);
                ELEMENT_DATA.splice(0, ELEMENT_DATA.length);
                // @ts-ignore
                ELEMENT_DATA.push({ date: this.currentDevice.date, build: this.currentDevice.filename, size: this.bytesToSize(this.currentDevice.size), download: this.currentDevice.url });
                console.log(ELEMENT_DATA);
                this.dataSource = ELEMENT_DATA;
              }
            }
          });
        }
      }
            
    });
  }
  

}
