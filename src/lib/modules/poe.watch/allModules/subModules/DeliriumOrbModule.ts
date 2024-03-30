import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing deliriumOrb data.
 */
class DeliriumOrbModule extends WatchBaseClass {
  /**
   * The league name for which deliriumOrb data is requested.
   */
  protected league: string;

  /**
   * The type name for which deliriumOrb data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of DeliriumOrbModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "deliriumOrb";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default DeliriumOrbModule;
