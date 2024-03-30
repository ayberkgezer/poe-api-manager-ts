import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique jewels.
 */
class UniqueJewelModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueJewelModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueJewel");
  }
}

export default UniqueJewelModule;
