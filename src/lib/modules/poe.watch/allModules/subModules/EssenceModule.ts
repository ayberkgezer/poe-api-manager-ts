import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing esssence data.
 */
class EssenceModule extends WatchBaseClass {
  /**
   * The league name for which esssence data is requested.
   */
  protected league: string;

  /**
   * The type name for which esssence data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of EssenceModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "esssence";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default EssenceModule;
