import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {BehaviorSubject, Observable} from "rxjs";
import {BookmarkService} from "../../services/bookmark.service";

@Component({
  selector: 'tec-tool-head',
  templateUrl: './tool-head.component.html',
  styleUrls: ['./tool-head.component.sass']
})
export class ToolHeadComponent implements OnInit {

  public data: ToolData|undefined;

  public isBookmarkedSubject: BehaviorSubject<boolean>;
  public isBookmarked: Observable<boolean>;

  constructor(private route:ActivatedRoute, private star: BookmarkService) {
    if(this.route && this.route.snapshot && this.route.snapshot.data) {
      this.data = <ToolData> this.route.snapshot.data;
    }
    else {
      this.data = undefined;
    }

    this.isBookmarkedSubject = new BehaviorSubject<boolean>(this.data ? star.isBookmarked(this.data.path) : false);
    this.isBookmarked = this.isBookmarkedSubject.asObservable();
  }

  ngOnInit(): void {

  }

  switchBookmarked() {
    if(this.data === undefined) {
      return;
    }

    let newValue = !this.isBookmarkedSubject.value;
    this.isBookmarkedSubject.next(newValue);
    newValue ? this.star.bookmark(this.data.path) : this.star.unbookmark(this.data.path);
  }
}
