import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamMembers : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("/assets/team.json").subscribe(data => {
      // console.log(data);
      this.teamMembers = data;
      console.log(this.teamMembers);
    });
  }

}
