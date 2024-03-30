import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling omens.
 */
class OmenModule extends ItemBaseClass {
  /**
   * Creates an instance of OmenModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Omen");
  }
}

export default OmenModule;
