import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling blighted maps.
 */
class BlightedMapModule extends ItemBaseClass {
  /**
   * Creates an instance of BlightedMapModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "BlightedMap");
  }
}

export default BlightedMapModule;
