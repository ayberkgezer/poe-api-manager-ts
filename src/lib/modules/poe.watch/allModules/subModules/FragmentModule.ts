import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing fragment data.
 */
class FragmentModule extends WatchBaseClass {
  /**
   * The league name for which fragment data is requested.
   */
  protected league: string;

  /**
   * The type name for which fragment data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of FragmentModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "fragment";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default FragmentModule;
