import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling blighted ravaged maps.
 */
class BlightedRavagedMapModule extends ItemBaseClass {
  /**
   * Creates an instance of BlightedRavagedMapModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "BlightedRavagedMap");
  }
}

export default BlightedRavagedMapModule;
