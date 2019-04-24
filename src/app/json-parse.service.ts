import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonParseService {

  constructor(private http: HttpClient) { }
  public getJSON(url) {
    return this.http.get(url).pipe(map(data => {
      return data;
    }));
  }

  // public getData() {
  //   return this.http.get().pipe(map(data => {
  //     return data;
  //   }));
  // }
}

//https://api.github.com/repos/SuperiorOS/official_devices/contents
