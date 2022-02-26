import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToolData} from "../../model/tool-data";
import {ToolCategory} from "../../model/tool-category";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public allCategories = Object.values(ToolCategory);
  private allTools: ToolData[] = [];
  public tools: ToolData[] = [];

  constructor(private router: Router) {
    router.config.forEach((route) => {
      if(route.data) {
        this.allTools.push(<ToolData> route.data);
      }
    });
    this.tools = this.allTools;
  }

  ngOnInit(): void {
  }

  search(value: string) {
    value = value.trim();
    value = value.toLowerCase();

    if(value == "") {
      this.tools = this.allTools;
      return;
    }

    console.log("Search for " + value);
    this.tools = this.allTools.filter((data) => {
        return (
            data.tags.filter(
              (tag) => {
                return tag.toLowerCase().includes(value);
              }).length > 0
          ||
            data.category.toLowerCase().includes(value)
          ||
            data.title.split(" ").filter(
              (titlePart) => {
                return titlePart.toLowerCase().includes(value);
              }
            ).length > 0
        );
    });
    console.log(this.tools);
  }

  filterCategory(searchbar:any, target: EventTarget|null) {
    if(target && target instanceof HTMLSpanElement && target.textContent) {
      let content = target.textContent.trim()
      if(content == 'All Categories') {
        content = '';
      }
      searchbar.value = content;
      this.search(content);
    }
  }
}
