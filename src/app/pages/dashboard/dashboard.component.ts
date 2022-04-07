import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {ToolCategory} from "../../model/tool-category";
import {BookmarkService} from "../../services/bookmark.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public allCategories = Object.values(ToolCategory).sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  });
  public tools: ToolData[] = [];

  starred: string[];

  constructor(private router: Router, private star: BookmarkService) {
    // Get all tools by registered routes
    router.config.forEach((route) => {
      if(route.data && route.data instanceof ToolData) {
        this.tools.push(<ToolData> route.data);
      }
    });

    this.starred = star.getBookmarked();
  }

  filterStarredTools() : ToolData[] {
    return this.tools.filter((t: ToolData) => this.starred.indexOf(t.path) > -1);
  }

  filterUnstarredTools() : ToolData[] {
    return this.tools.filter((t: ToolData) => this.starred.indexOf(t.path) === -1);
  }

  filterUnstarredToolsByCollection() : Map<string, ToolData[]> {
    let tools = new Map<string, ToolData[]>();
    for(let collection of Object.values(ToolCollection)) {
      let toolsInCollection = this.filterUnstarredTools().filter((t: ToolData) => t.collection === collection);
      if(toolsInCollection.length > 0) {
        tools.set(collection, toolsInCollection);
      }
    }
    return tools;
  }

  ngOnInit(): void {
  }

  unstarAll() {
    this.star.unbookmarkAll();
    window.location.reload();
  }
}
