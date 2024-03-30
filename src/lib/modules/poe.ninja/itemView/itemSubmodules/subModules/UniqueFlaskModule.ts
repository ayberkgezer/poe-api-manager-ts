import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique flasks.
 */
class UniqueFlaskModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueFlaskModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueFlask");
  }
}

export default UniqueFlaskModule;
