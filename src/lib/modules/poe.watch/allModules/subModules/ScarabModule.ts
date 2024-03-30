import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing scarab data.
 */
class ScarabModule extends WatchBaseClass {
  /**
   * The league name for which scarab data is requested.
   */
  protected league: string;

  /**
   * The type name for which scarab data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of ScarabModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "scarab";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default ScarabModule;
