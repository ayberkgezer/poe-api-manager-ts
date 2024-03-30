import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling delirium orbs.
 */
class DeliriumOrbsModule extends ItemBaseClass {
  /**
   * Creates an instance of DeliriumOrbsModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "DeliriumOrb");
  }
}

export default DeliriumOrbsModule;
