import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav, MAT_DRAWER_DEFAULT_AUTOSIZE } from '@angular/material';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  breakpoint: number;

  toggal() {
    if(window.innerWidth <= 769){
      return true;
    } else {
      return false;
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 780) ? 1 : 4; 
  }

  onResize(event) {
    this.breakpoint = (event.target.window.innerWidth <= 400) ? 1 : 4;
  }
}
