import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique accessories.
 */
class UniqueAccessoryModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueAccessoryModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueAccessory");
  }
}

export default UniqueAccessoryModule;
