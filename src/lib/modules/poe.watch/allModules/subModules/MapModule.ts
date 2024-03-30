import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing map data.
 */
class MapModule extends WatchBaseClass {
  /**
   * The league name for which map data is requested.
   */
  protected league: string;

  /**
   * The type name for which map data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of MapModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "map";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default MapModule;
