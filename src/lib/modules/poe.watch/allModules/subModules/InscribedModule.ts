import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing inscribed data.
 */
class InscribedModule extends WatchBaseClass {
  /**
   * The league name for which inscribed data is requested.
   */
  protected league: string;

  /**
   * The type name for which inscribed data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of InscribedModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "inscribed";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default InscribedModule;
