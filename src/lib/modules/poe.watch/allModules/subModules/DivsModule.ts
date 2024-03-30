import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing div data.
 */
class DivsModule extends WatchBaseClass {
  /**
   * The league name for which div data is requested.
   */
  protected league: string;

  /**
   * The type name for which div data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of DivsModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "div";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default DivsModule;
