import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing sextans data.
 */
class SextantModule extends WatchBaseClass {
  /**
   * The league name for which sextans data is requested.
   */
  protected league: string;

  /**
   * The type name for which sextans data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of SextantModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "sextans";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default SextantModule;
