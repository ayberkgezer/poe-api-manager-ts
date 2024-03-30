import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling scarabs.
 */
class ScarabModule extends ItemBaseClass {
  /**
   * Creates an instance of ScarabModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Scarab");
  }
}

export default ScarabModule;
