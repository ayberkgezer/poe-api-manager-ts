import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique relics.
 */
class UniqueRelicModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueRelicModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueRelic");
  }
}

export default UniqueRelicModule;
