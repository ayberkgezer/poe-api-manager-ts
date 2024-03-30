import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling base types.
 */
class BaseTypeModule extends ItemBaseClass {
  /**
   * Creates an instance of BaseTypeModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "BaseType");
  }
}

export default BaseTypeModule;
