import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing oil data.
 */
class OilModule extends WatchBaseClass {
  /**
   * The league name for which oil data is requested.
   */
  protected league: string;

  /**
   * The type name for which oil data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of OilModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "oil";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default OilModule;
