import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling vials.
 */
class VialsModule extends ItemBaseClass {
  /**
   * Creates an instance of VialsModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Vial");
  }
}

export default VialsModule;
