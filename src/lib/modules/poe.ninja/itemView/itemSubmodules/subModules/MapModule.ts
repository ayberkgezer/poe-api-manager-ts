import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling maps.
 */
class MapModule extends ItemBaseClass {
  /**
   * Creates an instance of MapModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Map");
  }
}

export default MapModule;
