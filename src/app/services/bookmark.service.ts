import { Injectable } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private cookies: CookieService) { }

  getBookmarked() {
    return this.cookies.check('starred') ? JSON.parse(this.cookies.get('starred')) : [];
  }

  bookmark(toolPath: string) {
    let currentlyStarred = this.getBookmarked();
    currentlyStarred.push(toolPath);
    this.cookies.set('starred', JSON.stringify(currentlyStarred));
  }

  unbookmark(toolPath: string) {
    this.cookies.set('starred', JSON.stringify(this.getBookmarked().filter((s: string) => s !== toolPath)));
  }

  unbookmarkAll() {
    this.cookies.delete('starred');
  }

  isBookmarked(toolPath: string): boolean {
    let currentlyStarred = this.getBookmarked();
    return (currentlyStarred.indexOf(toolPath) > -1);
  }
}
