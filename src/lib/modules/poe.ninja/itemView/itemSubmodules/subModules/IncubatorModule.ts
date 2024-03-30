import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling incubators.
 */
class IncubatorModule extends ItemBaseClass {
  /**
   * Creates an instance of IncubatorModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Incubator");
  }
}

export default IncubatorModule;
