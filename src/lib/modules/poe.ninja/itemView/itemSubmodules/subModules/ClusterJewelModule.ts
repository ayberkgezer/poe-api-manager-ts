import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling cluster jewels.
 */
class ClusterJewelModule extends ItemBaseClass {
  /**
   * Creates an instance of ClusterJewelModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "ClusterJewel");
  }
}

export default ClusterJewelModule;
