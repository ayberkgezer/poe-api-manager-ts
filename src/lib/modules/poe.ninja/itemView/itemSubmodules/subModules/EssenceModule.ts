import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling essences.
 */
class EssenceModule extends ItemBaseClass {
  /**
   * Creates an instance of EssenceModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Essence");
  }
}

export default EssenceModule;
