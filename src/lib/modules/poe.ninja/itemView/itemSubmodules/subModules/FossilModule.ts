import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling fossils.
 */
class FossilModule extends ItemBaseClass {
  /**
   * Creates an instance of FossilModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Fossil");
  }
}

export default FossilModule;
