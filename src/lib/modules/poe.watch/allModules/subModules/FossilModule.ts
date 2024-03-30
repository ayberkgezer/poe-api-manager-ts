import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing fossil data.
 */
class FossilModule extends WatchBaseClass {
  /**
   * The league name for which fossil data is requested.
   */
  protected league: string;

  /**
   * The type name for which fossil data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of FossilModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "fossil";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default FossilModule;
