import {ExternalDataProcessor} from "./external-data-processor";
import {ToolCategory} from "./tool-category";

export class ToolData {

  constructor(
    public component:any,
    public path:string,
    public title:string,
    public category:ToolCategory,
    public tags:string[],
    public icon:string,
    public description:string,
    public externalDataProcessors:ExternalDataProcessor[] = [],
  ) {
  }
}
