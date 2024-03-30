import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling oils.
 */
class OilModule extends ItemBaseClass {
  /**
   * Creates an instance of OilModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Oil");
  }
}

export default OilModule;
