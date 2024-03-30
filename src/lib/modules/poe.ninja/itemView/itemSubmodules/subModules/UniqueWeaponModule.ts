import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling unique weapons.
 */
class UniqueWeaponModule extends ItemBaseClass {
  /**
   * Creates an instance of UniqueWeaponModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "UniqueWeapon");
  }
}

export default UniqueWeaponModule;
