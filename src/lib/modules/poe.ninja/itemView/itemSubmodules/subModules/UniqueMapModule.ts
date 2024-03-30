import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique maps.
 */
class UniqueMapModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueMapModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueMap");
  }
}

export default UniqueMapModule;
