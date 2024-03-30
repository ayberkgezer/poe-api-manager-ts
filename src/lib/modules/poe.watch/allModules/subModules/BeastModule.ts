import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing beast data.
 */
class BeastModule extends WatchBaseClass {
  /**
   * The league name for which beast data is requested.
   */
  protected league: string;

  /**
   * The type name for which beast data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of BeastModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "beast";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default BeastModule;
