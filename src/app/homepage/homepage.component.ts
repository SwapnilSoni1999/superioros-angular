import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { JsonParseService } from '../json-parse.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px'
    });
    console.log("opened");
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  infoButton(){
    const dialogRef = this.dialog.open(InfoPanelDialog, {
      width: '400px'
    });
    console.log("Info Panel opened");

    dialogRef.afterClosed().subscribe(result => {
      console.log("InfoPanel was closed");
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog implements OnInit {
  public displee: boolean = false;
  color = 'primary';
  mode = 'indeterminate';
  deviceNaam: any;
  math = Math;
  tekst;
  buildURL;
  buildFound: boolean = true;

  findStatus: any;
  processMessage: any;
  loadinAnim = true;
  loadin = true;

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, public jsun: JsonParseService) { }

  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = this.math.floor(this.math.log(bytes) / this.math.log(1024));
    return this.math.round(bytes / this.math.pow(1024, i)) + ' ' + sizes[i];
  }
  kekNibba() {
    
    // this.loadinAnim = true;
    var deviceName = navigator.userAgent.slice(this.getBracketStart(), this.getBracketEnd());
    console.log(navigator.userAgent);
    console.log(deviceName);

    this.deviceNaam = deviceName;
    

    //this.displee = true;
    //this.findStatus = "Found!";
  }
  getBracketStart() {
    let cont = 0;

    let ekBarBracMilGaya = false, ekBarSemMilGaya = false;
  
    for(let i=0; i<navigator.userAgent.length; i++) {
      if(navigator.userAgent[i] == '(') {
        if(!ekBarBracMilGaya) {
          ekBarBracMilGaya = true;
          for (let j = i; j < navigator.userAgent.length; j++) {
            if (navigator.userAgent[j] == ';') {
              if(!ekBarSemMilGaya) {
                cont++;
                if(cont == 2) {
                  ekBarSemMilGaya = true;
                  console.log("Found ; at", j);
                  return j + 2;
                }
              }
            }
          }
        }
        
      }
    }
  }

  getBracketEnd() {
    let ekBarBracMilGaya = false;
    for(let i=0; i<navigator.userAgent.length; i++) {
      if(navigator.userAgent[i] == ')') {
        if(!ekBarBracMilGaya) {
          ekBarBracMilGaya = true;
          return i;
        }
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
    var boxMessage;
    var DEVICE_FOUND = false;

    this.findStatus = "Processing...";
    this.processMessage = "Reading device name...";
    this.jsun.getJSON('https://api.github.com/repos/SuperiorOS/official_devices/contents').subscribe(data => {
      console.log(data);
      // @ts-ignore
      for (var i = 0; i < data.length; i++) {
        if (data[i].name == 'devices.json') {
          this.jsun.getJSON(data[i].git_url).subscribe(data => {
            // @ts-ignore
            data = atob(data.content);
            var mainData;
            // @ts-ignore
            mainData = JSON.parse(data);
            console.log(mainData);
            this.processMessage = "Searching your deivce from available builds...";
            for (var j = 0; j < mainData.length; j++) {
              console.log(mainData[j].assert);
              for(var asset=0; asset<mainData[j].assert.length; asset++) {
                console.log(mainData[j].assert[asset]);
                console.log(mainData[j].assert.length);
                for (var k = 0; k < mainData[j].assert.length; k++) {
                  // console.log(this.asserts[i]);
                  console.log(navigator.userAgent.includes(mainData[j].assert[k]));
                  if (navigator.userAgent.includes(mainData[j].assert[k])) {
                    this.findStatus = "Found!";
                    this.loadinAnim = false;
                    DEVICE_FOUND = true;

                    this.buildFound = true;
                    console.log("this", mainData[j]);
                    boxMessage = `
                      Name: ${mainData[j].device_name} <br>
                      codename: ${mainData[j].codename} <br>
                      Build: ${mainData[j].filename} <br>
                      Size: ${this.bytesToSize(mainData[j].size)} <br>
                      Maintainer: ${mainData[j].maintainer_name} <br>
                      Date: ${mainData[j].date} <br>
                      Version: ${mainData[j].version} <br>
                      <a href="${mainData[j].xda_thread}">XDA Thread</a> <br>
                    `;
                    this.tekst = boxMessage;
                    this.loadin = false;
                    this.buildURL = mainData[j].url;

                    break;
                  }
                  else {
                    if(!DEVICE_FOUND) {
                      this.loadinAnim = false;
                      this.processMessage = "Build not found! Try to find your device from downloads section.";
                      this.findStatus = "Failed";
                    }
                  }
                }
              }
            }
          });
        }
      }
    });
  }

}




@Component({
  selector: 'info-panel',
  templateUrl: 'infoPanel.html',
})
export class InfoPanelDialog implements OnInit {

  ngOnInit() {

  }
}