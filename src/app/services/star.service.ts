import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private cookies: CookieService) { }

  getStarred() {
    return this.cookies.check('starred') ? JSON.parse(this.cookies.get('starred')) : [];
  }

  star(toolPath: string) {
    let currentlyStarred = this.getStarred();
    currentlyStarred.push(toolPath);
    this.cookies.set('starred', JSON.stringify(currentlyStarred));
  }

  unstar(toolPath: string) {
    let currentlyStarred = this.getStarred();
    currentlyStarred = currentlyStarred.filter((s: string) => s !== toolPath);
    this.cookies.set('starred', JSON.stringify(currentlyStarred));
  }

  unstarAll() {
    this.cookies.delete('starred');
  }

  isStarred(toolPath: string): boolean {
    let currentlyStarred = this.getStarred();
    return (currentlyStarred.indexOf(toolPath) > -1);
  }
}
