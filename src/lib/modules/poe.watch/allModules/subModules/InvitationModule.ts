import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing invitation data.
 */
class InvitationModule extends WatchBaseClass {
  /**
   * The league name for which invitation data is requested.
   */
  protected league: string;

  /**
   * The type name for which invitation data is requested.
   */
  protected typeName: string;

  /**
   * Creates a new instance of InvitationModule.
   * @param {string} league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "invitation";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }
}

export default InvitationModule;
