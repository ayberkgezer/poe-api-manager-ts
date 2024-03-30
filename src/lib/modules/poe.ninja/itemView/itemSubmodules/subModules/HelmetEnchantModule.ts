import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling helmet enchants.
 */
class HelmetEnchantModule extends ItemBaseClass {
  /**
   * Creates an instance of HelmetEnchantModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "HelmetEnchant");
  }
}

export default HelmetEnchantModule;
