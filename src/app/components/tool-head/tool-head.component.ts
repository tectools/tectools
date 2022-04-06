import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {BehaviorSubject, Observable} from "rxjs";
import {StarService} from "../../services/star.service";

@Component({
  selector: 'tec-tool-head',
  templateUrl: './tool-head.component.html',
  styleUrls: ['./tool-head.component.sass']
})
export class ToolHeadComponent implements OnInit {

  public data: ToolData|undefined;

  public isStarredSubject: BehaviorSubject<boolean>;
  public isStarred: Observable<boolean>;

  constructor(private route:ActivatedRoute, private star: StarService) {
    if(this.route && this.route.snapshot && this.route.snapshot.data) {
      this.data = <ToolData> this.route.snapshot.data;
    }
    else {
      this.data = undefined;
    }

    this.isStarredSubject = new BehaviorSubject<boolean>(this.data ? star.isStarred(this.data.path) : false);
    this.isStarred = this.isStarredSubject.asObservable();
  }

  ngOnInit(): void {

  }

  switchStarred() {
    if(this.data === undefined) {
      return;
    }

    let newValue = !this.isStarredSubject.value;
    this.isStarredSubject.next(newValue);

    newValue ? this.star.star(this.data.path) : this.star.unstar(this.data.path);
  }
}
