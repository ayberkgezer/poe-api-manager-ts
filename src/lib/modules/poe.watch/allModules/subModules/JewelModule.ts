import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing jewel data.
 */
class JewelModule extends WatchBaseClass {
  /**
   * The league name for which jewel data is requested.
   */
  protected league: string;

  /**
   * The type name for which jewel data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of JewelModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "jewel";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default JewelModule;
