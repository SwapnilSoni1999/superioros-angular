import { Component, OnInit, HostListener, AfterContentInit } from '@angular/core';
import { JsonParseService } from '../json-parse.service';

@Component({
  selector: 'app-downloadpage',
  templateUrl: './downloadpage.component.html',
  styleUrls: ['./downloadpage.component.css']
})
export class DownloadpageComponent implements OnInit,AfterContentInit {
  public innerWidth: any;
  public devices: Array<any> = [];

  ngAfterContentInit() {
    setTimeout(function() {
      var el = document.getElementsByClassName('ngforwala');
      var cnt = el.length -1;
      (<HTMLElement>el[cnt]).style.marginBottom = 18 + 'px';
    }, 2000);
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    var matCardWid;
    if(this.innerWidth <= 550) {
      console.log("kek");
      matCardWid = this.innerWidth -30;
      var elements = document.getElementsByClassName('example-card');
      for(var i=0; i<elements.length; i++) {
        (<HTMLElement>elements[i]).style.setProperty('width', matCardWid, 'important');
      }
    }
    else if (this.innerWidth > 1300) {
      matCardWid = this.innerWidth - 1200;
      var elements = document.getElementsByClassName('example-card');
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.width = matCardWid + 'px';
      }
    }
    else if(this.innerWidth > 1000) {
      matCardWid = this.innerWidth - 900;
      var elements = document.getElementsByClassName('example-card');
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.width = matCardWid + 'px';
      }
    }
  }

  acchaBro() {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    var matCardWid;
    if (this.innerWidth <= 550) {
      // console.log("kek");
      matCardWid = this.innerWidth - 30;
      var elements = document.getElementsByClassName('example-card');
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.width = matCardWid + 'px';
      }
    }
    else if (this.innerWidth > 1300) {
      matCardWid = this.innerWidth - 1200;
      var elements = document.getElementsByClassName('example-card');
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.width = matCardWid + 'px';
      }
    }
    else if (this.innerWidth > 1000) {
      matCardWid = this.innerWidth - 900;
      var elements = document.getElementsByClassName('example-card');
      for (var i = 0; i < elements.length; i++) {
        (<HTMLElement>elements[i]).style.width = matCardWid + 'px';
      }
    }
    
  }

  math = Math;
  codenames : Array<any> = [];

  constructor(public jsun: JsonParseService) { }

  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = this.math.floor(this.math.log(bytes) / this.math.log(1024));
    return this.math.round(bytes / this.math.pow(1024, i)) + ' ' + sizes[i];
  }
  getDot(str) {
    for(var i=0; i<str.length; i++) {
      if(str[i] == '.') {
        return i;
      }
    }
  }

  

  ngOnInit() {

    this.jsun.getJSON('https://api.github.com/repos/SuperiorOS/official_devices/contents').subscribe(data => {
      console.log(data);
      // @ts-ignore
      for(var i=0; i<data.length; i++) {
        if(data[i].name == 'devices.json') {
          this.jsun.getJSON(data[i].git_url).subscribe(data => {
            // @ts-ignore
            data = atob(data.content);
            var mainData;
            // @ts-ignore
            mainData = JSON.parse(data);
            console.log(mainData);
            for(var j=0; j<mainData.length; j++) {
              console.log(mainData[j]);
              this.devices.push(mainData[j]);
              console.log(this.devices);
            }
          });
        }
      }

      // this.jsun.getJSON(data[4].git_url).subscribe(data => {
      //   // // @ts-ignore
      //   // console.log(atob(data.content));
      //   // // @ts-ignore
      //   // var detaa = atob(data.content);
      //   // detaa = JSON.parse(detaa);
      //   // console.log(detaa);
      //   // console.log(detaa.response[0].size);
      //   // console.log(this.bytesToSize(detaa.response[0].size));

      // });
    });
    this.acchaBro();
  }

}
