import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling memories.
 */
class MemoryModule extends ItemBaseClass {
  /**
   * Creates an instance of MemoryModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Memory");
  }
}

export default MemoryModule;
