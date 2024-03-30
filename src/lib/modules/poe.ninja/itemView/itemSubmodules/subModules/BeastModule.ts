import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling beasts.
 */
class BeastModule extends ItemBaseClass {
  /**
   * The name of the beast type.
   */
  private readonly typeName: string = "Beast";

  /**
   * Creates an instance of BeastModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Beast");
  }
}

export default BeastModule;
