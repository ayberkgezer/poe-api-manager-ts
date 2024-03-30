import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique armours.
 */
class UniqueArmourModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueArmourModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueArmour");
  }
}

export default UniqueArmourModule;
