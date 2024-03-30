import WatchBaseClass from "../../WatchBaseClass";

/**
 * Subclass of WatchBaseClass for accessing currency data.
 */
class CurrencyModule extends WatchBaseClass {

  /**
   * Creates a new instance of CurrencyModule.
   * @param league - The league from which the data will be fetched.
   */
  constructor(league: string) {
    const type: string = "currency";
    super(league, type);
  }
}

export default CurrencyModule;
