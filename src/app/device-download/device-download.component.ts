import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonParseService } from '../json-parse.service';

@Component({
  selector: 'app-device-download',
  templateUrl: './device-download.component.html',
  styleUrls: ['./device-download.component.css']
})
export class DeviceDownloadComponent implements OnInit {

  constructor(private route: Router, private jsun: JsonParseService) { }

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
                
              }
            }
          });
        }
      }
            
    });
  }

}
