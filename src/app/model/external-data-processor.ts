export class ExternalDataProcessor {
  constructor(
    public name: string,
    public url: string,
    public privacy: string = "",
    public tos: string = ""
  ) {
  }
}
