import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing flask data.
 */
class FlaskModule extends WatchBaseClass {
  /**
   * The league name for which flask data is requested.
   */
  protected league: string;

  /**
   * The type name for which esssflaskence data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of FlaskModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "flask";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default FlaskModule;
