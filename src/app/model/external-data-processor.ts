export class ExternalDataProcessor {

  public static SELF: ExternalDataProcessor = new ExternalDataProcessor(
    window.location.host + " API",
    window.location.origin+"/api/"
  );

  constructor(
    public name: string,
    public url: string,
    public privacy: string = "",
    public tos: string = ""
  ) {
  }
}
