import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {BookmarkService} from "../../services/bookmark.service";
import {ToolCollection} from "../../model/tool-collection";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {

  public tools: ToolData[] = [];

  bookmarked: string[];

  constructor(private router: Router, private star: BookmarkService) {
    // Get all tools by registered routes
    router.config.forEach((route) => {
      if(route.data && route.data instanceof ToolData) {
        this.tools.push(<ToolData> route.data);
      }
    });

    this.bookmarked = star.getBookmarked();
  }

  filterBookmarkedTools() : ToolData[] {
    return this.tools.filter((t: ToolData) => this.bookmarked.indexOf(t.path) > -1);
  }

  filterNonBookmarkedTools() : ToolData[] {
    return this.tools.filter((t: ToolData) => this.bookmarked.indexOf(t.path) === -1);
  }

  filterNonBookmarkedToolsByCollection() : Map<string, ToolData[]> {
    let tools = new Map<string, ToolData[]>();
    for(let collection of Object.values(ToolCollection)) {
      let toolsInCollection = this.filterNonBookmarkedTools().filter((t: ToolData) => t.collection === collection);
      if(toolsInCollection.length > 0) {
        tools.set(collection, toolsInCollection);
      }
    }
    return tools;
  }

  unbookmarkAll() {
    this.star.unbookmarkAll();
    window.location.reload();
  }
}
