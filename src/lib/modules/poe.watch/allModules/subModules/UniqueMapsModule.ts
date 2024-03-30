import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing uniqueMaps data.
 */
class UniqueMapsModule extends WatchBaseClass {
  /**
   * The league name for which uniqueMaps data is requested.
   */
  protected league: string;

  /**
   * The type name for which uniqueMaps data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of UniqueMapsModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "uniqueMaps";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default UniqueMapsModule;
