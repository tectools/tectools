import {ExternalDataProcessor} from "./external-data-processor";
import {ToolCategory} from "./tool-category";
import {ToolCollection} from "./tool-collection";

export class ToolData {

  constructor(
    public component:any,
    public path:string,
    public title:string,
    public collection:ToolCollection,
    public category:ToolCategory,
    public tags:string[],
    public icon:string,
    public description:string,
    public externalDataProcessors:ExternalDataProcessor[] = [],
  ) {
  }
}
