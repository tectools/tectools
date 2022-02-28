import { Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ToolData} from "../model/tool-data";
import {ToolCategory} from "../model/tool-category";
import {ExternalDataProcessor} from "../model/external-data-processor";

export const tools: ToolData[] = [];

export function Tool(
  title:string,
  category:ToolCategory,
  tags:string[],
  icon:string,
  description:string,
  externalDataProcessors:ExternalDataProcessor[] = [],
  path:string=title.replace(" ", "_").toLowerCase()
) {
  return function(target: Function) {
    tools.push(
      new ToolData(
        target,
        path,
        title,
        category,
        tags,
        icon,
        description,
        externalDataProcessors
      )
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class ToolDataService {

  constructor(private router: Router) { }

  /**
   * Push routes for tools
   */
  initRoutes() {
    tools.sort((a, b) => {
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    });

    const routes = this.router.config;
    for(let tool of tools) {
      routes.push({
        path: tool.path,
        component: tool.component,
        data: tool
      })
    }
  }
}

