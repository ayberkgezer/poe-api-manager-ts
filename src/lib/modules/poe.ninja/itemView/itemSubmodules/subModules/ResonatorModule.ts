import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling resonators.
 */
class ResonatorModule extends ItemBaseClass {
  /**
   * Creates an instance of ResonatorModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Resonator");
  }
}

export default ResonatorModule;
